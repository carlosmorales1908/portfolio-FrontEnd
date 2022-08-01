import { Component, Input, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  @Input() listaEstudios!: educacion[];


  constructor() { }

  ngOnInit(): void {
  }

}
