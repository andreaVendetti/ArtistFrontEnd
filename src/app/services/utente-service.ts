import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';
import { HttpClient } from '@angular/common/http';
import { environment } from '../componenti/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  
  private apiUrl = `${environment.apiUrl}/api/opere`;

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
