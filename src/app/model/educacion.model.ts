export class educacion{
    id?:number;
    institucion: string;
    nivel: string;
    titulo: string;
    enCurso: boolean;
    finalizado: boolean;
    anioFinalizado: number;


    constructor(institucion:string, nivel:string, titulo:string, enCurso:boolean, finalizado:boolean, anioFinalizado:number){
        this.institucion = institucion;
        this.nivel = nivel;
        this.titulo = titulo;
        this.enCurso = enCurso;
        this.finalizado = finalizado;
        this.anioFinalizado = anioFinalizado;
    }

}