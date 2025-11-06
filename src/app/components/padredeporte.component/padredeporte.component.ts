import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeporte',
  standalone: false,
  templateUrl: './padredeporte.component.html',
  styleUrl: './padredeporte.component.css',
})
export class PadredeporteComponent {
  public deportes: Array<string>;
  public mensaje: string;

  //NECESITAMOS UN METODO QUE RECIBA EVENT QUE VA A SER CUALQUIER TIPADO
  seleccionarFavoritoPadre(event: any): void {
    this.mensaje = "Deporte favorito: " + event
    console.log(event);
  }

  constructor(){
    this.mensaje = "";
    this.deportes = ["Futbol", "Curling", "Artes marcianas", "Beisbol", "Natación", "Dardos"]
  }
}
