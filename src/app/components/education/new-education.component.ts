import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  institucionEdu: string;
  nivelEdu: string;
  tituloEdu: string;
  enCursoEdu: boolean;
  anioFinalizadoEdu: number;
  constructor(private sEducacion: EducacionService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new educacion(this.institucionEdu, this.nivelEdu, this.tituloEdu, this.enCursoEdu, this.anioFinalizadoEdu);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Educacion añadida correctamente.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló.");
        this.router.navigate(['']);
      }
    )
  }

}
