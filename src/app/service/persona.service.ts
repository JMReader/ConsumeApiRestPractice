import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private readonly http: HttpClient) { }
  public TraerPersonas():Observable<any>{
    return this.http.get("http://localhost:3000/persona/obtener");
  }
public traerPersonaxID(id: string | null):Observable<any>{
  const options = {
    method: 'GET',
    params: {
      "id": id
    },
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  return this.http.get("http://localhost:3000/persona/obtenerxID");
}

}
