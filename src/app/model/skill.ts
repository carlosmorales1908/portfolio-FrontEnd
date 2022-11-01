export class Skill {
    id?: number;
    nombre: string;
    meses: string;
    porcentaje: number;
    colorCirculo: string;
    colorPorcentaje: string;
    url_img: string;


    constructor(nombre: string, meses: string, porcentaje: number, colorCirculo: string, colorPorcentaje: string, url_img: string) {
        this.nombre = nombre;
        this.meses = meses;
        this.porcentaje = porcentaje;
        this.colorCirculo = colorCirculo;
        this.colorPorcentaje = colorPorcentaje;
        this.url_img = url_img;
    }
}
