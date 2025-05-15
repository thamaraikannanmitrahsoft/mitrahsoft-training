import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FoodItemsService } from '../../../core/services/food-items.service';
import { UserdetailsService } from '../../../core/services/userdetails.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  users: any;
  foodTiming: any[] = [];
  foodPreference: any[] = []
  submitted: boolean = false;
  existingUserID: number = 0;
  constructor(private fb: FormBuilder, private foodItemsService: FoodItemsService, private userDetails: UserdetailsService, private toastr: ToastrService) { }
  ngOnInit() {
    this.formData();
    this.loadUser();
    this.addRow();
    this.foodTiming = this.foodItemsService.foodTiming;
    this.foodPreference = this.foodItemsService.foodPreference;
  }
  formData() {
    this.userForm = this.fb.group({
      COD_NAME: ['', Validators.required],
      COD_DOB: ['', Validators.required],
      COD_MOBILE: ['', Validators.required],
      COD_EMAIL: ['', Validators.required],
      COD_PASSWORD: ['', Validators.required],
      COD_CONFIRMPASSWORD: ['', Validators.required],
      foodItems: this.fb.array([])
    },
      { validators: this.passwordMatchValidator });
  }
  get COD_NAME() {
    return this.userForm.get('COD_NAME');
  }
  get COD_DOB() {
    return this.userForm.get('COD_DOB');
  }
  get COD_MOBILE() {
    return this.userForm.get('COD_MOBILE');
  }
  get COD_EMAIL() {
    return this.userForm.get('COD_EMAIL');
  }
  get COD_PASSWORD() {
    return this.userForm.get('COD_PASSWORD');
  }
  get COD_CONFIRMPASSWORD() {
    return this.userForm.get('COD_CONFIRMPASSWORD');
  }
  get foodItems(): FormArray {
    return this.userForm.get('foodItems') as FormArray;
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('COD_PASSWORD');
    const confirmPassword = group.get('COD_CONFIRMPASSWORD');
    if (confirmPassword?.value == password?.value) {
      if (confirmPassword?.value == '') {
        return
      }
      else if (confirmPassword?.value && password?.value == '') {
        return
      }
      else {
        confirmPassword?.setErrors(null)
      }
    }
    else {
      confirmPassword?.setErrors({ passwordMatchValidator: true })
    }
  }
  addRow() {
    const group = this.fb.group({
      timing: [''],
      preferences: [{ value: '', disabled: true }]
    });
    this.foodItems.push(group)
  }
  deleteRow(index: number) {
    this.foodItems.removeAt(index);
  }
  onChanges(index: number) {
    const group = this.foodItems.at(index) as FormGroup;
    const timingId = group.get('timing')?.value;
    const preferences = group.get('preferences')
    if (timingId) {
      preferences?.enable();
    }
    else {
      preferences?.disable()
      preferences?.reset([]);
    }
  }
  getAvailableTimings(currentIndex: number) {
    const selectedTimings = this.foodItems.controls.map((group, index) => index !== currentIndex ? +group.get('timing')?.value : null).filter(value => value);
    return this.foodTiming.filter(timing => !selectedTimings.includes(timing.id));
  }
  getPreferencesByTiming(timingId: number) {
    return this.foodPreference.filter(food => food.timingId == timingId);
  }
  getTimingLabel(id: number): string {
    return this.foodTiming.find(timing => timing.id == id)?.value || '';
  }
  getPreferenceLabels(id: number[]): string[] {
    return this.foodPreference.filter(preference => id.includes(preference.id)).map(preference => preference.label);
  }
  loadUser() {
    this.userDetails.getAllUsers().subscribe((response: any) => {
      if (response.code == 200) {
        this.users = response.data
      }
    })
  }
  editRecord(user: any) {
    this.userForm.reset();
    this.foodItems.clear();
    this.userForm.patchValue({
      COD_NAME: user.COD_NAME,
      COD_DOB: user.COD_DOB,
      COD_MOBILE: user.COD_MOBILE,
      COD_EMAIL: user.COD_EMAIL,
      COD_PASSWORD: user.COD_PASSWORD,
      COD_CONFIRMPASSWORD: user.COD_CONFIRMPASSWORD,
    });
    user.foodItems?.forEach((item: any) => {
      const group = this.fb.group({
        timing: [item.timing],
        preferences: [{ value: item.preferences || [], disabled: false }]
      });
      this.foodItems.push(group);
    });
  }
  deleteRecord(id: number) {
    this.userDetails.deleteUser(id).subscribe((response: any) => {
      if (response.code == 200) {
        this.loadUser();
      }
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.foodItems.controls.forEach(group => {
        (group as FormGroup).markAllAsTouched();
      })
      return;
    }
    const userData = this.userForm.value;
    const existingUser = this.users.filter((user: any) => user.COD_EMAIL == userData.COD_EMAIL)
    if (existingUser.length > 0) {
      this.existingUserID = existingUser[0].id
    }
    if (this.existingUserID) {
      userData.id = this.existingUserID;
      this.userDetails.editUser(userData).subscribe((response: any) => {
        if (response.code == 200)
          this.loadUser()
        else {
          this.toastr.error('Error editing the user', '', {
            timeOut: 1000
          });
        }
      })
    }
    else {
      this.userDetails.addUser(userData).subscribe((response: any) => {
        if (response.code == 200) {
          this.loadUser()
        }
        else {
          this.toastr.error('Error adding new add user', '', {
            timeOut: 1000
          });
        }
      })
    }
    this.userForm.reset();
    this.foodItems.clear();
    this.addRow();
  }
}