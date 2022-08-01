import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() persona!: persona;

  constructor() { }

  ngOnInit(): void {
  }

}
