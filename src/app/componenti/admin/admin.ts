import { Component, OnInit, Signal, signal } from '@angular/core';
import { Opera } from '../../models/opera';
import { Utente } from '../../models/utente';
import { OperaService } from '../../services/opera-service';
import { AuthService } from '../../auth/auth-service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtenteService } from '../../services/utente-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit{

  opere: Opera[] = [];

  formOpera: Opera = {id:0, titolo: "", descrizione: "", imgPath: "", anno: 0, work: false};
  operaSelezionata: Opera | null = null;
  mostraFormOpera = signal(false);

  formUtente: Utente = {id: 0, nome: "", cognome: "", email: "", pass: "", admin: 0};
  mostraFormUtente= signal(false);

  constructor(private operaService: OperaService,
              public auth: AuthService,
              private router: Router,
              private utenteService: UtenteService,
              private routes: ActivatedRoute
              ){}

  ngOnInit(): void {
    this.caricaOpere();
    const userAdmin = this.auth.getUtente();
    this.formUtente.nome = userAdmin.nome;
    this.formUtente.cognome = userAdmin.cognome;
    this.formUtente.email = userAdmin.email;
    this.formUtente.admin = userAdmin.admin;
    
    this.routes.queryParams.subscribe(params => {
    if (params['modifica']) {
      const id = Number(params['modifica']);
      this.operaService.get(id).subscribe(opera => {
        this.apriFormModifica(opera);
      });
    }
  });
  }

  caricaOpere(){
    this.operaService.getOpere().subscribe(
      data => this.opere = data
    );
  }

  apriFormNuova() {
    this.operaSelezionata = null;
    this.formOpera = { id: 0, titolo: '', descrizione: '', imgPath: '', anno: 0, work: false };
    this.mostraFormOpera.set(true);
  }

  apriFormModifica(opera: Opera) {
    this.operaSelezionata = opera;
    this.formOpera = { ...opera };
    this.mostraFormOpera.set(true);
  }

  salvaOpera() {
    if (this.operaSelezionata) {
      this.operaService.update(this.operaSelezionata.id, this.formOpera)
        .subscribe(() => {
          this.mostraFormOpera.set(false);
          this.caricaOpere();
        });
    } else {
      this.operaService.create(this.formOpera)
        .subscribe(() => {
          this.mostraFormOpera.set(false);
          this.caricaOpere();
        });
    }
  }

  eliminaOpera(id: number) {
    if (confirm('Sei sicuro di voler eliminare questa opera?')) {
      this.operaService.delete(id).subscribe(() => this.caricaOpere());
    }
  }

 
  salvaDatiUtente() {
    const u = this.auth.getUtente();
    
    const utenteAggiornato: Utente = {
      id: u.id,
      nome: this.formUtente.nome,
      cognome: this.formUtente.cognome,
      email: this.formUtente.email,
      pass: this.formUtente.pass,
      admin: u.admin
    };

    this.utenteService.update(utenteAggiornato, u.id).subscribe({
      next: () => {
        alert('Dati aggiornati!');
        this.mostraFormUtente.set(false);
      },
     error: () => alert('Errore durante il salvataggio')
    });
  }

  
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
