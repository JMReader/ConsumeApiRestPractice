import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/models/libro';
import { ServiceLibroService } from 'src/app/service/service-libro.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {
  o!: Observable<any>;
  lib = new Libro();
  libForm: FormGroup;
  constructor(private readonly sl: ServiceLibroService, private fb: FormBuilder) { 
    this.libForm = fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)] ),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(4)] ),
      stock: new FormControl(0, [Validators.min(1)] )
    });
  }

  ngOnInit(): void {
  }

  subir():void {
    this.o=this.sl.CrearLibro(this.lib);
    this.o.subscribe(result => console.log(result));
    this.lib= new Libro();
  }
}
