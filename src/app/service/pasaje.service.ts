import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';
import { PasajeWid } from '../models/pasaje-wid';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  constructor(private readonly http: HttpClient) { }
  
  public ObtenerPasajes():Observable<any>{
    return this.http.get("http://localhost:3000/pasaje/obtener");
  }
  public BorrarPasaje(id:string| null) :Observable<any>{
return this.http.delete("http://localhost:3000/pasaje/borrar/" + id);
  }
  public obteneruno(id:string | null) :Observable<any>{
    console.log(id);
    return this.http.get("http://localhost:3000/pasaje/traer/" + id);
      }
  public CrearPasaje(psj :Pasaje):Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })}
    const body = JSON.stringify(psj);
    console.log(JSON.stringify(psj));
    return this.http.post("http://localhost:3000/pasaje/crear",body, options);
  }

  public editarPasaje(psj :PasajeWid):Observable<any>{
    const options = {
      method: "PUT",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })}
    const body = JSON.stringify(psj);
    console.log(JSON.stringify(psj));
    return this.http.put("http://localhost:3000/pasaje/actualizar",body, options);
  }

}
