import { Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { Opere } from './componenti/opere/opere';
import { BioComponent } from './componenti/bio-component/bio-component';
import { Login } from './componenti/login/login';
import { Admin } from './componenti/admin/admin';
import { authGuardGuard } from './auth/auth-guard-guard';

export const routes: Routes = [
    {path: "", component: Home, children:[
        {
            path: "works", component: Opere},
        {
            path: "about", component: BioComponent
        },
        {
            path: "login", component: Login
        },
        {
            path: "admin", component: Admin, canActivate: [authGuardGuard] 
        }
    ]}
];
