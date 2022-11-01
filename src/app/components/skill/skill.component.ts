import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private sSkill: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.sSkill.lista().subscribe(
      data => {
        this.skills = data;
      }
    )
  }

  borrarSkill(id?: number): void {
    if(id != undefined){
      this.sSkill.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo eliminar.");
        }
      )
    }
  }

}
