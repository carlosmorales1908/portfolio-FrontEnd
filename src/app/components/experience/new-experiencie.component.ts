import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia_laboral } from 'src/app/model/experiencia_laboral.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencie',
  templateUrl: './new-experiencie.component.html',
  styleUrls: ['./new-experiencie.component.css']
})
export class NewExperiencieComponent implements OnInit {
  empresaExp: string = "";
  descripcionExp: string = "";
  puestoExp: string = "";
  esActualExp!: boolean;
  fechaInicioExp!: Date;
  fechaFinExp!: Date;

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new experiencia_laboral(this.empresaExp, this.descripcionExp, this.puestoExp, this.esActualExp, this.fechaInicioExp, this.fechaFinExp);

    this.sExperiencia.save(exp).subscribe(
      data=>{
        alert("Eperiencia añadida");
        this.router.navigate(['']);
    }, err=>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
