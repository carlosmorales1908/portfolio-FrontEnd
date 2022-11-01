export class educacion{
    id?:number;
    institucion: string;
    nivel: string;
    titulo: string;
    enCurso: boolean;
    anioFinalizado: number;


    constructor(institucion:string, nivel:string, titulo:string, enCurso:boolean, anioFinalizado:number){
        this.institucion = institucion;
        this.nivel = nivel;
        this.titulo = titulo;
        this.enCurso = enCurso;
        this.anioFinalizado = anioFinalizado;
    }

}