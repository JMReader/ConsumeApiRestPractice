import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeWid } from 'src/app/models/pasaje-wid';
import { PasajeService } from 'src/app/service/pasaje.service';

@Component({
  selector: 'app-pasajes-ver',
  templateUrl: './pasajes-ver.component.html',
  styleUrls: ['./pasajes-ver.component.css']
})
export class PasajesVerComponent implements OnInit {
  pasajeTodos !: PasajeWid[];
  
  conta:number=0;
  contm:number=0;
  contj :number=0;
  ob!: Observable<any>;
  constructor(private readonly spsj: PasajeService) { 
    this.ob = spsj.ObtenerPasajes();
    this.llenarArray(this.ob);
    
  }

  eliminar(id : string | null):void {
    this.spsj.BorrarPasaje(id).subscribe(result =>console.log(result));
    this.ob = this.spsj.ObtenerPasajes();
    this.llenarArray(this.ob);
  }


  ngOnInit(): void {

  }
  llenarArray(o: Observable<any>): void {
    this.conta=0;
    this.contj=0;
    this.contm=0;
    this.pasajeTodos= new Array();
     o.subscribe(
      (result) => {
        result.forEach((element: any) => {
          let psj = new PasajeWid;
          Object.assign(psj, element);
          if(psj.categoriaPasajero=="a"){
            this.conta++;
          }else {
            if(psj.categoriaPasajero=="m"){
              this.contm++;
            }
            else{
              this.contj = this.contj + 1;
            }
          }
          this.pasajeTodos.push(psj);
        
        });
      },    
        (error) => {
        alert('error');
      }

     )
      
  }

}
