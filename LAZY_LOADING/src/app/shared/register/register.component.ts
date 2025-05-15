import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalserviceService } from '../../core/services/globalservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  userInfo!: any[];
  constructor(private globalservice: GlobalserviceService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.formData()
  }
  formData() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      profilepic: ['profile1.jpeg']
    });
  }
  get name() {
    return this.registerForm.get('name');
  }
  get dob() {
    return this.registerForm.get('dob');
  }
  get mobileNumber() {
    return this.registerForm.get('mobileNumber');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  getImage(event: any) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      this.registerForm.patchValue({
        profilepic: reader.result as string
      })
    }
    reader.readAsDataURL(file);
  }

  onRegister() {
    if (this.registerForm.invalid) {
      this.toastr.error("All the fields are required", '', {
        timeOut: 2000
      });
      return
    }
    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      this.toastr.error("password and confirm passowrd didn't match", '', {
        timeOut: 2000
      });
      return
    }
    var object = this.registerForm.value;
    this.userInfo = JSON.parse(localStorage.getItem('userData') || '[]');
    const newId = this.userInfo.length > 0 ? this.userInfo[this.userInfo.length - 1].id + 1 : 1;
    var userObject = {
      id: newId,
      ...object
    }
    if (this.userInfo.length > 0) {
      this.userInfo.push(userObject)
      var storeUserData = JSON.stringify(this.userInfo);
      localStorage.setItem('userData', storeUserData);
    }
    else {
      this.userInfo = [];
      this.userInfo.push(userObject)
      var storeUserData = JSON.stringify(this.userInfo);
      localStorage.setItem('userData', storeUserData);
    }
    this.globalservice.users.push(object);
    this.toastr.success('Registered successfully!', '', {
      timeOut: 1000
    });
  }
}