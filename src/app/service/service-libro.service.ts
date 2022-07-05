import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class ServiceLibroService {

  constructor(private readonly http: HttpClient) { }

  public TraerLibros():Observable<any>{
    return this.http.get("http://localhost:3000/libros/obtenerLibros");
}
public TraerLibrosDestacados():Observable<any>{
  return this.http.get("http://localhost:3000/libros/destacados");
}



public CrearLibro(lb:Libro):Observable<any>{
  const options = {
    method: "POST",
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })}
  const body = JSON.stringify(lb);
  return this.http.post("http://localhost:3000/libros/create",body, options);

}

}
