import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  userInfo!: any[];
  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private registerService: RegisterService) { }
  ngOnInit(): void {
    this.formData()
  }
  formData() {
    this.registerForm = this.fb.group({
      COD_NAME: ['', Validators.required],
      COD_DOB: ['', Validators.required],
      COD_MOBILE: ['', Validators.required],
      COD_EMAIL: ['', Validators.required],
      COD_PASSWORD: ['', Validators.required],
      COD_CONFIRMPASSWORD: ['', Validators.required],
      COD_PROFILEPIC: ['profile1.jpeg']
    });
  }
  get COD_NAME() {
    return this.registerForm.get('COD_NAME');
  }
  get COD_DOB() {
    return this.registerForm.get('COD_DOB');
  }
  get COD_MOBILE() {
    return this.registerForm.get('COD_MOBILE');
  }
  get COD_EMAIL() {
    return this.registerForm.get('COD_EMAIL');
  }
  get COD_PASSWORD() {
    return this.registerForm.get('COD_PASSWORD');
  }
  get COD_CONFIRMPASSWORD() {
    return this.registerForm.get('COD_CONFIRMPASSWORD');
  }
  getImage(event: any) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      this.registerForm.patchValue({
        COD_PROFILEPIC: reader.result as string
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
    if (this.registerForm.get('COD_PASSWORD')?.value != this.registerForm.get('COD_CONFIRMPASSWORD')?.value) {
      this.toastr.error("password and confirm passowrd didn't match", '', {
        timeOut: 2000
      });
      return
    }
    this.registerService.register(this.registerForm.value).subscribe((response: any) => {
      if (response.code == 200) {
        this.toastr.success('Registered successfully!', '', {
          timeOut: 1000
        });
        this.router.navigate(['/login']);
      }
    })
  };
}