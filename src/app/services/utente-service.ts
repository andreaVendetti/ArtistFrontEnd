import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtenteService {

  private apiUrl = "http://localhost:8080/api/utenti";

  constructor(private http: HttpClient){}


  getUtenti(): Observable<Utente[]>{
    return this.http.get<Utente[]>(this.apiUrl);
  }

  getUtente(idU: number): Observable<Utente>{
    return this.http.get<Utente>(`${this.apiUrl}/${idU}`)
  }

  create(u : Utente): Observable<Utente>{
    return this.http.post<Utente>(`${this.apiUrl}`, u);
  }

  update(u : Utente, idU: number): Observable<Utente>{
    return this.http.put<Utente>(`${this.apiUrl}/${idU}`, u);
  }

  delete(idU: number): Observable<Utente>{
    return this.http.delete<Utente>(`${this.apiUrl}/${idU}`);
  }

}
