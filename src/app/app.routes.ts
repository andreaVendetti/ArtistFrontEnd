import { Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { Opere } from './componenti/opere/opere';
import { OperaComponent } from './opera-component/opera-component';

export const routes: Routes = [
    {path: "", component: Home, children:[
        {path: "opere", component: Opere, children: [
            {path:":id", component: OperaComponent}
        ]}
    ]}
];
