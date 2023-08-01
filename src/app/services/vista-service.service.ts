import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VistaServiceService {

  constructor(private http: HttpClient) { }

  enviarTexto(texto: string): Observable<any> {
    return this.http.post('http://20.119.56.158:8000/pdfs/', { Texto: texto });
  }

  buscarLinks(texto: string): Observable<any> {
    return this.http.post('http://20.119.56.158:8000/links/', { Texto: texto });
  }

  entrenamiento(): Observable<any> {
    return this.http.get('http://20.119.56.158:8000/ent/');
  }

  prediccion(texto: string): Observable<any> {
    return this.http.post('http://20.119.56.158:8000/pre/', { Texto: texto });
  }

  resumen(): Observable<any> {
    return this.http.get('http://20.119.56.158:8000/res/');
  }

}
