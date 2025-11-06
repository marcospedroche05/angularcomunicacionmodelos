import { Component, Input } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: "app-hijocoche",
  standalone: false,
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css',
})
export class HijococheComponent {
  @Input () car!: Coche;
  public mensaje: string;

  constructor(){
    this.mensaje = "";
  }

  getEstado(): boolean {
    if(this.car.estado){
      this.mensaje = "Arrancando!!!";
      return true;
    } else {
      this.mensaje = "El coche está apagado!!!";
      this.car.velocidad = 0;
      return false;
    }
  }

  encenderCoche(): void {
    this.car.estado = !this.car.estado
    this.getEstado();
  }

  acelerarCoche(): void {
    if (this.getEstado() == false)
      alert ("¿donde vas? Que estoy apagado")
    else {
      this.car.velocidad += this.car.aceleracion;
    }
  }
}
