import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { Opera } from '../../models/opera';
import { EnterAnimation } from '../animazione-menu/animazione-menu';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EnterAnimation, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  opere: Opera[] = [];

  constructor(
    private servizioOpera: OperaService,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.servizioOpera.getOpere().subscribe((data) => {
      this.opere = data;
      this.cdr.detectChanges(); // forza aggiornamento UI
    });
  }
}