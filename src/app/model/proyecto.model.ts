export class proyecto{
    id?: number;
    nombre: string;
    descripcion: string;
    url_img: string;
    link: string;


    constructor(nombre: string, descripcion: string, url_img: string, link: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url_img = url_img;
        this.link = link;
    }


}
