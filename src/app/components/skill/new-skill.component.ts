import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreSkill: string;
  mesesSkill: string;
  porcentajeSkill: number;
  colorCirculoSkill: string;
  colorPorcentajeSkill: string;
  url_imgSkill: string;

  constructor(private sSkill: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hab = new Skill(this.nombreSkill, this.mesesSkill, this.porcentajeSkill, this.colorCirculoSkill, this.colorPorcentajeSkill, this.url_imgSkill);
    this.sSkill.save(hab).subscribe(
      data => {
        alert("Habilidad añadida correctamente.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
