import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { Opera } from '../../models/opera';
import { EnterAnimation } from '../animazione-menu/animazione-menu';
import { ActivatedRoute, Route, Router, RouterOutlet } from '@angular/router';
import { ServizioHome } from '../../services/servizio-home';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EnterAnimation, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  opere : Opera[] = []
  
  
  constructor(private servizioOpera : OperaService, public homeService : ServizioHome, public router : Router ){}

  ngOnInit(): void {
    this.servizioOpera.getOpere().subscribe((data) => {
      this.opere = data;
    })
   
  }
  

}
