import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: any[];
  loginStatus: boolean = false;
  matchedUser!: any[];
  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private loginService: LoginService) { }
  ngOnInit(): void {
    this.formData()
  }
  formData() {
    this.loginForm = this.fb.group({
      COD_EMAIL: ['', Validators.required],
      COD_PASSWORD: ['', Validators.required]
    });
  }
  get Email() {
    return this.loginForm.get('COD_EMAIL');
  }
  get password() {
    return this.loginForm.get('COD_PASSWORD');
  }
  onLogin() {
    const payload = { COD_EMAIL: this.Email?.value, COD_PASSWORD: this.password?.value };
    this.loginService.login(payload).subscribe((response: any) => {
      if (response.code == 200) {
        this.loginStatus = true;
        localStorage.clear()
        localStorage.setItem('token', response.data[0].token);
        localStorage.setItem('id', response.data[0].id);
        this.toastr.success('Login Successful', '', {
          timeOut: 1000
        });
        this.router.navigate(['/main']);
      } else {
        this.toastr.error('Invalid credentials', '', {
          timeOut: 1000
        });
      }
    })
  };
}