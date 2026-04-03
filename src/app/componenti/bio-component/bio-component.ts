import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
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

  constructor(private operaService : OperaService,  private cdr: ChangeDetectorRef, private zone :NgZone){}
  
    ngOnInit(): void {
    this.operaService.get(2).subscribe((data) => {
      this.zone.run(() => {
        this.imgP = data;
        this.cdr.detectChanges();
      });
    });
  }
}
