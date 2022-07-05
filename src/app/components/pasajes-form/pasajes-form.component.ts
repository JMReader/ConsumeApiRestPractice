import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeWid } from 'src/app/models/pasaje-wid';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/service/pasaje.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-pasajes-form',
  templateUrl: './pasajes-form.component.html',
  styleUrls: ['./pasajes-form.component.css']
})
export class PasajesFormComponent implements OnInit {
  pasajeActual : Pasaje = new Pasaje();
  editar: boolean = false;
  ob!: Observable<any>;
  edit ! :string;
  psjwid: PasajeWid = new PasajeWid();
  per : Persona = new Persona();
  personasregistradas: Persona[] = new Array();
  edadPasajero :number =0;
  constructor(private readonly spsj: PasajeService, private readonly sper: PersonaService, private rou : ActivatedRoute, private router: Router) {
    //si el id esta nulo significa que creamos pasaje, si trae algo que editamos :))
    if(rou.snapshot.paramMap.get('id') != null){
      console.log(rou.snapshot.paramMap.get('id'));
      this.editar= true;
      this.llenareditar();
    }
    console.log(this.pasajeActual);
    this.ob = sper.TraerPersonas();
    this.llenarArray(this.ob);
   }

  ngOnInit(): void {
  }
  definirCategoria(): void {
  
    if(this.edadPasajero<18){
      this.pasajeActual.categoriaPasajero="m";
       this.pasajeActual.precioPasaje =  this.pasajeActual.precioPasaje *0.25;
    }else{
      if(this.edadPasajero<65){
        this.pasajeActual.categoriaPasajero="a"
    }else{
      this.pasajeActual.categoriaPasajero="j"
      this.pasajeActual.precioPasaje =  this.pasajeActual.precioPasaje *0.5;
    } }
    this.pasajeActual.fechaCompra = new Date().toLocaleString();
  }
  guardar(): void {
   console.log(this.pasajeActual.pasajero);
  this.definirCategoria();
  this.ob= this.spsj.CrearPasaje(this.pasajeActual);
  this.ob.subscribe(result =>console.log(result));
  this.pasajeActual= new Pasaje();
  }
  editarPasaje(): void {
    this.definirCategoria();
    this.psjwid.pasajero = new Persona();
    this.psjwid._id = this.rou.snapshot.paramMap.get('id');
    this.psjwid.categoriaPasajero = this.pasajeActual.categoriaPasajero;
    this.psjwid.fechaCompra = this.pasajeActual.fechaCompra;
    this.psjwid.pasajero._id = this.pasajeActual.pasajero;
    this.psjwid.precioPasaje = this.pasajeActual.precioPasaje;
    this.ob= this.spsj.editarPasaje(this.psjwid);
    this.ob.subscribe(result =>console.log(result));
    this.pasajeActual= new Pasaje();
    this.router.navigate(['verPasajes']);
  }



  llenarArray(o: Observable<any>): void {
   
    this.personasregistradas= new Array();
     o.subscribe(
      (result) => {
        result.forEach((element: any) => {
          let per = new Persona;
          Object.assign(per, element);
          this.personasregistradas.push(per);
        });
      },    
        (error) => {
        alert('error');
      }

     )
      
  }

  llenareditar():void{
    this.ob= this.spsj.obteneruno(this.rou.snapshot.paramMap.get('id'));
    this.ob.subscribe(result => {
      Object.assign(this.pasajeActual, result);
      if(this.pasajeActual.categoriaPasajero=="m"){
        this.pasajeActual.precioPasaje =  this.pasajeActual.precioPasaje *4;
        console.log(this.pasajeActual.precioPasaje);
     }else{
       if(this.pasajeActual.categoriaPasajero=="j"){
         this.pasajeActual.precioPasaje =  this.pasajeActual.precioPasaje *2;
         console.log(this.pasajeActual.precioPasaje);
     }else{ this.pasajeActual.precioPasaje = this.pasajeActual.precioPasaje;}
   }
    });
 
  }

}
