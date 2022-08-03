import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})


export class ProyectoService {
  URL = 'http://api-portfolio3615.herokuapp.com/proyecto';

  constructor(private http:HttpClient) { }
  
  public getProyecto(): Observable<proyecto> {
    return this.http.get<proyecto>(this.URL + '/ver/1');
  }
}
