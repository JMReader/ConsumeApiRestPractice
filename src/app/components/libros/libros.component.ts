import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/models/libro';
import { ServiceLibroService } from 'src/app/service/service-libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  ob!: Observable<any>;
  
  destacados : boolean = false;
  cont: number = 0;
  servl!: ServiceLibroService ;
  libros : Libro[] = new Array;
  librosDes : Libro[] = new Array;
  
  constructor(private readonly sl: ServiceLibroService) {
    this.ob = sl.TraerLibros();
    this.libros=this.llenarArray(this.ob);
    
    
    
    console.log(this.libros);
    console.log(this.librosDes);
   }

   ngOnInit(): void {
  }
  
  cambiar(){
    this.cont=0;
    if(this.destacados==true){
      this.destacados=false;
      this.ob = this.sl.TraerLibros();
    this.libros=this.llenarArray(this.ob);
    }
    else{
      this.destacados=true
      this.ob = this.sl.TraerLibrosDestacados();
      this.libros = this.llenarArray(this.ob);
    
    }
  }


   llenarArray(ob : Observable<any>): Libro[] {
    let libros : Libro[];
    libros = new Array();
     ob.subscribe(
      (result) => {
        result.forEach((element: any) => {
          let Lb = new Libro();
          Object.assign(Lb, element);
          libros.push(Lb);
        
        });
     
      },    
        (error) => {
        alert('error');
      }

     )
      return libros;
   }

siguiente():void {
  if(this.cont<this.libros.length){
    this.cont++;
  }else{this.cont=0;}
  if(this.cont==this.libros.length){
    this.cont=0;
  }
  
}
anterior():void {
  if(this.cont==0){
    this.cont=this.libros.length;
  }
  if(this.cont>0){
    this.cont= this.cont-1;
  }else{this.cont=this.libros.length;}

}




}
