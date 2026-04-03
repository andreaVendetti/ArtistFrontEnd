import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OperaService } from '../../services/opera-service';
import { MaterialModule } from '../../material-module/material-module-module';
import { ServizioHome } from '../../services/servizio-home';
import { AuthService } from '../../auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opere',
  imports: [MaterialModule],
  templateUrl: './opere.html',
  styleUrl: './opere.css',
})

export class Opere implements OnInit {
  opere: any[] = [];
  caricamento = true;
  indice = 0;
  perPagina = 1;

  constructor(
    private servizioOpere: OperaService,
    private servizioHome: ServizioHome,
    public auth: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.servizioHome.isHome.set(false);
    this.servizioOpere.getOpere().subscribe(data => {
      this.opere = data;
      this.cdr.detectChanges();
    });
  }

  get opereWorks() {
    return this.opere.filter(o => o.work === true);
  }

  opereVisibili() {
    return this.opereWorks.slice(this.indice, this.indice + this.perPagina);
  }

  next() {
    if (this.indice + this.perPagina < this.opereWorks.length) {
      this.indice += this.perPagina;
    }else {
      this.indice = 0;
    }
  }

  prev() {
    if (this.indice > 0) {
      this.indice -= this.perPagina;
    }else {
      this.indice = this.opereWorks.length - this.perPagina;
    }
  }

  modifica(idO: number) {
    this.router.navigate(['/admin'], { queryParams: { modifica: idO } });
  }

  elimina(idO: number) {
    this.router.navigate(['/admin'], { queryParams: { elimina: idO } });
  }
}