export class experiencia_laboral{
    id?: number;
    empresa: string;
    descripcion: string;
    esActual: boolean;
    fechaInicio: Date;
    fechaFin: Date;


    constructor(empresa: string, descripcion: string, esActual: boolean, fechaInicio: Date, fechaFin: Date){
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.esActual = esActual;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin; 
    }

}
