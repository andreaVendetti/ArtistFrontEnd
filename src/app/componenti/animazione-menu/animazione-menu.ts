import {Component, signal} from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../auth/auth-service';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: 'animazione-menu.html',
  styleUrls: ['animazione-menu.css'],
  imports: [RouterLink],
})
export class EnterAnimation {

  constructor(public auth: AuthService){
    
  }
  
  mouseIn  = signal(false)
  show() {
    this.mouseIn.set(true);
  }

  hide() {
    this.mouseIn.set(false);
  }
  
  toggle(){
    this.mouseIn.set(!this.mouseIn())
  }

}