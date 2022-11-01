import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia_laboral } from '../model/experiencia_laboral.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'https://api-portfolio3615.herokuapp.com/experiencia-laboral/';

  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<experiencia_laboral[]>{
    return this.httpclient.get<experiencia_laboral[]>(this.URL + 'ver/todas');
  }

  public detalle(id: number): Observable<experiencia_laboral>{
    return this.httpclient.get<experiencia_laboral>(this.URL + `ver/${id}`);
  }

  public save(experiencia: experiencia_laboral): Observable<any>{
    return this.httpclient.post<any>(this.URL + 'new', experiencia);
  }

  public update(id: number, experiencia: experiencia_laboral): Observable<any>{
    return this.httpclient.put<any>(this.URL + `modificar/${id}`, experiencia);
  }

  public delete(id:number): Observable<any>{
    return this.httpclient.delete<any>(this.URL + `eliminar/${id}`);
  }
}

