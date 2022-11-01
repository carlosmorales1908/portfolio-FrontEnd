import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educaciones: educacion[] = [];
  
  constructor(private sEducation: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducaciones();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarEducaciones(): void {
    this.sEducation.lista().subscribe(
      data => {
        this.educaciones = data;
      }
    )
  }

  borrarEducacion(id?: number){
    if(id != undefined){
      this.sEducation.delete(id).subscribe(
        data => {this.cargarEducaciones();
        }, err => {
          alert("No se pudo eliminar educación.");
        }
      )
    }
  }
}
