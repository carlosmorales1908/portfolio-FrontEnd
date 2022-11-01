import { Component, Input, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit {
  @Input() persona!: persona;
  
  
  constructor(private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }
  
}

