import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  URL = 'https://api-portfolio3615.herokuapp.com/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<proyecto[]>{
    return this.httpClient.get<proyecto[]>(this.URL + 'ver/todos');
  }

  public detalle(id: number): Observable<proyecto>{
    return this.httpClient.get<proyecto>(this.URL + `ver/${id}`);
  }

  public save(proyecto: proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', proyecto);
  }

  public update(id: number, proyecto: proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `modificar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `eliminar/${id}`);
  }
}
