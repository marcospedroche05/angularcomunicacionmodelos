import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  standalone: false,
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css',
})
export class HijodeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter()
  constructor(){}

  seleccionarFavoritoHijo(): void {
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
