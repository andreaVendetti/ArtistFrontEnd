import { Component, OnInit } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { MaterialModule } from '../../material-module/material-module-module';
import { ServizioHome } from '../../services/servizio-home';
import { AuthService } from '../../auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opere',
  imports: [MaterialModule],
  templateUrl: './opere.html',
  styleUrl: './opere.css',
})

export class Opere implements OnInit{
  opere : any
   
  constructor(private servizioOpere : OperaService, private servizioHome : ServizioHome, public auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.servizioHome.isHome.set(false)
    this.servizioOpere.getOpere().subscribe(data => {
      this.opere = data;
    })

   
  }

  modifica(idO : number){
    this.router.navigate(['/admin'], { queryParams: { modifica: idO } });
  }

  elimina(idO : number){
    this.router.navigate(["/admin"], {queryParams :{ elimina : idO}})
  }
}
