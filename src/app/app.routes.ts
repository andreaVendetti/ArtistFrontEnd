import { Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { Opere } from './componenti/opere/opere';
import { OperaComponent } from './opera-component/opera-component';
import { BioComponent } from './componenti/bio-component/bio-component';
import { Login } from './componenti/login/login';

export const routes: Routes = [
    {path: "", component: Home, children:[
        {
            path: "works", component: Opere, children: [
            {path:":id", component: OperaComponent}
        ]},
        {
            path: "about", component: BioComponent
        },
        {
            path: "login", component: Login
        }
    ]}
];
