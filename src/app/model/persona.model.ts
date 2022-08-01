import { educacion } from "./educacion.model";
import { experiencia_laboral } from "./experiencia_laboral.model";
import { proyecto } from "./proyecto.model";
import { tecnologia } from "./tecnologia.model";

export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    correo: string;
    sobre_mi: string;
    url_foto: string;
    url_img: string;
    listaEducaciones: educacion[];
    listaExperiencias_laborales: experiencia_laboral[];
    listaProyectos: proyecto[];
    listaTecnologias: tecnologia[];


    constructor(nombre: string, apellido: string, correo: string, sobre_mi: string, url_foto: string, url_img: string, listaEducaciones: educacion[],
        listaExperiencias_laborales: experiencia_laboral[], listaProyectos: proyecto[], listaTecnologias: tecnologia[] ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.sobre_mi = sobre_mi;
        this.url_foto = url_foto;
        this.url_img = url_img;
        this.listaEducaciones = listaEducaciones;
        this.listaExperiencias_laborales = listaExperiencias_laborales;
        this.listaProyectos = listaProyectos;
        this.listaTecnologias = listaTecnologias;

    }
}