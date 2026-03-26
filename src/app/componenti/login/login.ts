import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { NZ_LOGIN_MODULES } from '../../ng-zorro/imports';
import { AuthService } from '../../auth/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NZ_LOGIN_MODULES],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  loginForm! : FormGroup
  error = ""

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }
  
  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }

    const{ email, pass} = this.loginForm.value;

    this.auth.login(email, pass).subscribe({
        next: () => this.router.navigate(["/admin"]),
        error: () => this.error = "Email o password errati"
    });

  }


}
