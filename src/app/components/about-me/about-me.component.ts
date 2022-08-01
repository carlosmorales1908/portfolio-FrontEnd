import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit {
  @Input() persona!: persona;
  
  constructor() { }

  ngOnInit(): void {

  }

  
}


