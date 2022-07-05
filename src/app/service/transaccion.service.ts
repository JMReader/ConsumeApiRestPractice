import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private readonly http: HttpClient) { 
  }

  crearTransaccion (t: Transaccion): Observable<any>{
    const body = JSON.stringify(t);
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })}
      return this.http.post("http://localhost:3000/transacciones/generar",body, options);

  }
  getTodas(): Observable<any>{
    return this.http.get("http://localhost:3000/transacciones/obtener");
  }
  filtrarDivisas(divisaO: string, divisaD: string):Observable<any> {
    const options = {
      method: 'GET',
      params: {
        "origen": divisaD,
        "destino": divisaO
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get("http://localhost:3000/transacciones/filtraDivisas", options)
  }

 
}
