import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperaService } from '../../services/opera-service';

@Component({
  selector: 'app-opere',
  imports: [],
  templateUrl: './opere.html',
  styleUrl: './opere.css',
})

export class Opere {

  constructor(private route: ActivatedRoute, private servizioOpere : OperaService){}

  
}
