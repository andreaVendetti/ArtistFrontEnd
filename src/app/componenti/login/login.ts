import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { NZ_LOGIN_MODULES } from '../../ng-zorro/imports';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NZ_LOGIN_MODULES],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  
  loginForm! : FormGroup
 

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }
  
  onSubmit(){
    
  }


}
