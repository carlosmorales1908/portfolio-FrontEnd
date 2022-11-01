import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})


export class PersonaService {
  URL = 'https://api-portfolio3615.herokuapp.com/persona';


  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.httpClient.get<persona>(this.URL + 'ver/1');
  }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'ver/todas');
  }

  public detalle(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `ver/${id}`);
  }

  public save(persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', persona);
  }

  public update(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `modificar/${id}`, persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  }

}
