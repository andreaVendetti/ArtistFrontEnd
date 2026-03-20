import {Component, signal} from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: 'animazione-menu.html',
  styleUrls: ['animazione-menu.css'],
  imports: [RouterLink],
})
export class EnterAnimation {

  
  mouseIn  = signal(false)
  show() {
    this.mouseIn.set(true);
  }

  hide() {
    this.mouseIn.set(false);
  }
}