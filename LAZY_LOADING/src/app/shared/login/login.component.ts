import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalserviceService } from '../../core/services/globalservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: any[];
  token: string = ''
  loginStatus: boolean = false;
  matchedUser!: any[];
  constructor(private globalservice: GlobalserviceService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }
  ngOnInit(): void {
    const serviceData = this.globalservice.token;
    this.formData()
    this.user = JSON.parse(localStorage.getItem('userData') || '[]');
    this.token = serviceData;
  }
  formData() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onLogin() {
    const { email, password } = this.loginForm.value;
    this.matchedUser = this.user.filter(user => user.email === email && user.password === password)
    if (this.matchedUser.length > 0) {
      localStorage.setItem('token', this.token)
      localStorage.setItem('loggedInUser', this.matchedUser[0].id)
      this.loginStatus = true;
      this.toastr.success('Login Successful', '', {
        timeOut: 1000
      });
      this.router.navigate(['/main']);
    } else {
      this.toastr.error('Invalid credentials', '', {
        timeOut: 1000
      });
    }
  }
}