import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {
  nombreProy: string;
  descripcionProy: string;
  url_imgProy: string;
  linkProy: string;

  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy = new proyecto(this.nombreProy, this.descripcionProy, this.url_imgProy, this.linkProy);
    console.log(proy);
    this.sProyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadido correctamente.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló.");
        this.router.navigate(['']);
      }
    )
  }
}
