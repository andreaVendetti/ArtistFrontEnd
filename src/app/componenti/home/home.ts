import { Component } from '@angular/core';
import { Material } from '../../services/material';
import { OnInit } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { Opera } from '../../models/opera';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
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
  }

  

}
