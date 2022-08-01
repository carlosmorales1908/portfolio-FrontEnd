import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() persona!: persona;

  constructor() { }

  ngOnInit(): void {
  }

}
