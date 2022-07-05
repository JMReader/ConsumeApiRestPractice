export class Libro {
    descripcion!: string;
    destacado !:boolean;
    imagen!: string;
    stock !:number;
    titulo!: string;
   
    constructor() {
        this.descripcion = "";
        this.destacado = false;
        this.imagen = " ";
        this.stock = 0;
        this.titulo = " " ;
        
    }
}
