import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/service/transaccion.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {
  ob !: Observable<any>;
  validado : boolean=false;
  devolucion !: string;
  tscc!: Transaccion;
  public emailForm: FormGroup;
  monedas = [
    'USD',
    'EUR',
    'BIT'
  ]
  constructor(private readonly st: TransaccionService, private fb: FormBuilder) {
    this.emailForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email] )
    });
    this.tscc = new Transaccion();
   }

  ngOnInit(): void {
  }

  acceder():void {
    this.validado= !this.validado;
  }
  crear():void {
    
    this.tscc.cantidadDestino = this.tscc.cantidadOrigen * this.tscc.tasaConversion;
    console.log(this.tscc);
  this.ob = this.st.crearTransaccion(this.tscc);
  this.ob.subscribe(result => console.log(result));
    this.tscc = new Transaccion();
  }
}
