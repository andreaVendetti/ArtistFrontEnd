import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { Opera } from '../../models/opera';
import { EnterAnimation } from '../animazione-menu/animazione-menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [EnterAnimation, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  opere : Opera[] = []
  
  constructor(private servizioOpera : OperaService){}

  ngOnInit(): void {
    this.servizioOpera.getOpere().subscribe((data) => {
      this.opere = data;
    })
    console.log(this.opere)
  }

  

}
