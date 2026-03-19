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
}
