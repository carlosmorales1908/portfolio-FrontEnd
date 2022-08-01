import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { experiencia_laboral } from 'src/app/model/experiencia_laboral.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() listaExperiencias!: experiencia_laboral[];

 
  constructor() { }
  
  ngOnInit(): void {
  }

}
