import { Component, OnInit } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { MaterialModule } from '../../material-module/material-module-module';
import { ServizioHome } from '../../services/servizio-home';

@Component({
  selector: 'app-opere',
  imports: [MaterialModule],
  templateUrl: './opere.html',
  styleUrl: './opere.css',
})

export class Opere implements OnInit{
  opere : any
   
  constructor(private servizioOpere : OperaService, private servizioHome : ServizioHome){}

  ngOnInit(): void {
    this.servizioHome.isHome.set(false)
    this.servizioOpere.getOpere().subscribe(data => {
      this.opere = data;
    })

   
  }


  
}
