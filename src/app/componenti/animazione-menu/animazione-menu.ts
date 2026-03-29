import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../auth/auth-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: 'animazione-menu.html',
  styleUrls: ['animazione-menu.css'],
  imports: [RouterLink, CommonModule],
})
export class EnterAnimation {

  mouseIn = false;

  constructor(public auth: AuthService, private cdr: ChangeDetectorRef) {}

  show() {
    if (!this.isMobile()) this.mouseIn = true;
  }

  hide() {
    if (!this.isMobile()) this.mouseIn = false;
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  toggleMenu() {
    this.mouseIn = !this.mouseIn;
    this.cdr.detectChanges(); // forza aggiornamento UI
  }

  chiudiMenu() {
    this.mouseIn = false;
    this.cdr.detectChanges();
  }
}