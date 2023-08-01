import { Component } from '@angular/core';
import { VistaServiceService } from 'src/app/services/vista-service.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent {

  loading = false;
  texto=""
  m1=""
  m2=""
  m3=""
  m4=""
  m5=""
  m6=""
  m7=""
  m8: any[] = [];
  m9=""
  m10: any[] = [];
  constructor(
    private s : VistaServiceService,
  ){}

  

  enviar(){
    this.loading = true;
    this.m1="Buscando PDFs en mendeley"
    this.s.enviarTexto(this.texto).pipe(
      tap(data => {
        console.log(data),
        this.m2 = data;
        this.m3="Descargando PDFs, buscando Topicos y generando df"
      }),
      switchMap(() => this.s.buscarLinks(this.texto)),
      tap(data => {
        console.log(data),
        this.m4 = data;
        this.m5="Entrenando"
      }),
      switchMap(() => this.s.entrenamiento()),
      tap(data => {
        console.log(data),
        this.m6 = data;
        this.m7="Buscando mejores 4 PDFs"
      }),
      switchMap(() => this.s.prediccion(this.texto)),
      tap(data => {
        console.log(data),
        this.m8 = data;
        this.m9="Generando resumenes"
      }),
      switchMap(() => this.s.resumen())
    ).subscribe(
      data => {
        console.log(data),
        this.m10 = data;
        this.loading = false;
      },
      error => console.error(error)
    );
  }  
}
