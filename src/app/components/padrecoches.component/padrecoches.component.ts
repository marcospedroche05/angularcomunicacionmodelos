import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-padrecoches',
  standalone: false,
  templateUrl: './padrecoches.component.html',
  styleUrl: './padrecoches.component.css',
})
export class PadrecochesComponent {
    public cochesArray: Array<Coche>;
    constructor(){
      this.cochesArray = [
        new Coche("Ford", "Mustang", 400, 30, false),
        new Coche("Volkswagen", "Escarabajo", 110, 4, false),
        new Coche("Lamborghini", "Diablo", 800, 72, false)
      ]
    }
}
