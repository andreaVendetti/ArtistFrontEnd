import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opera } from '../models/opera';

@Injectable({
  providedIn: 'root',
})
export class OperaService {
  private apiUrl = "http://localhost:8080/api/opere"
  constructor(private http : HttpClient){}
 
  getOpere(): Observable <Opera[]>{
    return this.http.get<Opera[]>(this.apiUrl)
  }

  get(id: number): Observable<Opera>{
    return this.http.get<Opera>(`${this.apiUrl}$/{id}`);
  }

  create(opera: Opera): Observable<Opera>{
    return this.http.post<Opera>(`${this.apiUrl}`, opera);
  }

  update(id: number, opera: Opera): Observable<Opera>{
    return this.http.put<Opera>(`${this.apiUrl}/${id}`, opera);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}
