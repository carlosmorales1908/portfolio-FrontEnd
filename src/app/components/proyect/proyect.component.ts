import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { proyecto } from 'src/app/model/proyecto.model';
import { PersonaService } from 'src/app/service/persona.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  /* 
  listaProyectos: proyecto[]  = new Array<proyecto>();
  proyecto: proyecto = new proyecto("","","","");

  constructor(public proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => {this.proyecto = data})
  }
  */

  @Input() listaProyectos!: proyecto[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
