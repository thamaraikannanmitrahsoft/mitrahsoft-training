import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FoodItemsService } from '../core/services/food-items.service'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  users: any[] = [];
  foodTiming: any[] = [];
  foodPreference: any[] = []
  editIndex: number = -1;
  isshow: boolean = true;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private foodItemsService: FoodItemsService) { }
  ngOnInit() {
    this.formData()
    this.foodTiming = this.foodItemsService.foodTiming;
    this.foodPreference = this.foodItemsService.foodPreference;
    this.addRow();
  }
  formData() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      foodItems: this.fb.array([])
    },
      { validators: this.passwordMatchValidator });
  }
  get name() {
    return this.userForm.get('name');
  }
  get dob() {
    return this.userForm.get('dob');
  }
  get mobileNumber() {
    return this.userForm.get('mobileNumber');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }
  get foodItems(): FormArray {
    return this.userForm.get('foodItems') as FormArray;
  }
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');
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

  getPreferencesByTiming(timingId: number) {
    return this.foodPreference.filter(food => food.timingId == timingId);
  }
  getAvailableTimings(currentIndex: number) {
    const selectedTimings = this.foodItems.controls.map((group, index) => index !== currentIndex ? +group.get('timing')?.value : null).filter(value => value);
    return this.foodTiming.filter(timing => !selectedTimings.includes(timing.id));
  }
  onChanges(index: number) {
    const group = this.foodItems.at(index) as FormGroup;
    const timingId = group.get('timing')?.value;
    group.get('preferences')?.reset()
    if (timingId) {
      group.get('preferences')?.enable()
    }
    else {
      group.get('preferences')?.disable()
    }
  }
  addRow() {
    const group = this.fb.group({
      timing: ['', Validators.required],
      preferences: [{ value: '', disabled: true }, Validators.required]
    });
    this.foodItems.push(group)
  }
  getRemainingValues(index: number) {
    this.foodItems.controls.filter(a => {
      a.get('timing')?.value
    })
  }
  deleteRow(index: number) {
    this.foodItems.removeAt(index);
  }
  editRecord(index: number) {
    this.userForm.patchValue(this.users[index]);
    this.editIndex = index;
  }
  deleteRecord(index: number) {
    this.users.splice(index, 1);
    if (this.users.length < 1) {
      this.isshow = true
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.foodItems.controls.forEach(group => {
        (group as FormGroup).markAllAsTouched();
        return;
      })
      console.log(this.userForm);
      return;
    }
    console.log(this.userForm.value);
    const userData = this.userForm.value
    if (this.editIndex > -1) {
      this.users[this.editIndex] = userData
      this.editIndex = -1
    }
    else {
      this.users.push(userData)
    }
    this.isshow = false;
    this.userForm.reset()
  }
}