import { Component, OnInit } from '@angular/core';
import { experiencia_laboral } from 'src/app/model/experiencia_laboral.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiencias: experiencia_laboral[] = [];

  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.experiencias = data;});
  }

  borrarExperiencia(id?: number): void{
    if(id!= undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia.");
        }
      )
    }
  }

}


