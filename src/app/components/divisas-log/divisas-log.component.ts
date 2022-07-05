import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/service/transaccion.service';

@Component({
  selector: 'app-divisas-log',
  templateUrl: './divisas-log.component.html',
  styleUrls: ['./divisas-log.component.css']
})
export class DivisasLogComponent implements OnInit {
  ob!: Observable<any>;
  conversiones!: Transaccion[];
  divisas: boolean=false;
  monedas = [
    'USD',
    'EUR',
    'BIT'
  ]
  divisaOrigen!:string;
  divisaDestino!:string;
  constructor(private readonly st: TransaccionService) { 
    this.ob= this.st.getTodas();
    this.llenarArray(this.ob);
  }

  ngOnInit(): void {
  }

  todas():void{
    this.divisas = false;
    this.ob= this.st.getTodas();
    this.llenarArray(this.ob);
  }
  filtrar():void{
    this.divisas = true;
  }
  filtrartConfirmacion():void{
    this.ob= this.st.filtrarDivisas(this.divisaOrigen, this.divisaDestino);
    this.llenarArray(this.ob);
  }

  llenarArray(o : Observable<any>):void {
    this.conversiones = new Array();
    o.subscribe(
      (result) => {
        result.forEach((element: any) => {
          let ts = new Transaccion();
          Object.assign(ts, element);
          this.conversiones.push(ts);
        });
     
      },    
        (error) => {
        alert('error');
      }
    )
  }

  
}
