import { Component, OnInit } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { MaterialModule } from '../../material-module/material-module-module';


@Component({
  selector: 'app-opere',
  imports: [MaterialModule],
  templateUrl: './opere.html',
  styleUrl: './opere.css',
})

export class Opere implements OnInit{
  opere : any
   
  constructor(private servizioOpere : OperaService){}

  ngOnInit(): void {
    this.servizioOpere.getOpere().subscribe(data => {
      this.opere = data;
     
    })
  }


  
}
