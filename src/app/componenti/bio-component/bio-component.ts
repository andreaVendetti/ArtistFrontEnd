import { Component, OnInit } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { Opera } from '../../models/opera';

@Component({
  selector: 'app-bio-component',
  imports: [],
  templateUrl: './bio-component.html',
  styleUrl: './bio-component.css',
})
export class BioComponent implements OnInit {
  
  imgP : any = null

  constructor(private operaService : OperaService){}
  
  ngOnInit(): void {
    this.operaService.get(3).subscribe((data) => {
      this.imgP = data
    });
  }
}
