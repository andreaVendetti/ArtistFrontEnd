import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  private url = "http://localhost:8080/api/auth";
  //variabile peer indicare l'utente loggato
  private _utente : any = null;

  //serve per recuperare l'utente se già loggato e se ricarica la pagina
  constructor(private http: HttpClient){
    const saved = localStorage.getItem("utente")
    this._utente = (saved) ? JSON.parse(saved) : null
  }

  //Fa la chiamata POST al backend con email e password. Il .pipe(tap(...)) significa: 
  //quando la risposta arriva, prima di darla al componente, salva l'utente in _utente e in localStorage.
  //Il tap non modifica la risposta, la intercetta solo per fare un'azione aggiuntiva.
  login(email: string, password: string): Observable<any>{
    return this.http.post(`${this.url}/login`, {email, password}).pipe(
      tap((res: any) =>{
        this._utente = res;
        localStorage.setItem("utente", JSON.stringify(res));
      })
    );
  }

  logout(){
    this._utente = null;
    localStorage.removeItem("utente");
  }

  validateToken(): Observable<any> {
    const token = this._utente?.token;
    return this.http.get(`${this.url}/validate`, {
          headers: { Authorization: `Bearer ${token}` }
  });
}  


  // il doppio "!!" trasforma qualsiasi valore in true o false
  isLogged(){
    return !!this._utente;
  }

  isAdmin(){
    return this._utente?.admin === 1;
  }

  getUtente(){
    return this._utente;
  }

}
