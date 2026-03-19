import {Component, signal} from '@angular/core';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: 'animazione-menu.html',
  styleUrls: ['animazione-menu.css'],
  imports: [RouterLink],
})
export class EnterAnimation {
  isShown = signal(false);
  toggle() {
    this.isShown.update((isShown) => !isShown);
  }
}