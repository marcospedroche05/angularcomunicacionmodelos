import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from '../../models/Comic';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-libreria',
  standalone: false,
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css',
})
export class LibreriaComponent implements OnInit {
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion!: ElementRef;

  public comics!: Array<Comic>;
  public comicFavorito!: Comic;

  nuevoComic(): void{
    let titulo = this.cajanombre.nativeElement.value;
    let descripcion = this.cajadescripcion.nativeElement.value;
    let imagen = this.cajaimagen.nativeElement.value;
    let comic = new Comic(titulo, imagen, descripcion);
    this.comics.push(comic);
  }

  seleccionarFavorito(favorito: Comic): void {
    this.comicFavorito = favorito;
  }

  deleteComic(index: number): void {
    this.comics.splice(index, 1);
  }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  constructor(private _service: ServiceComics) {
    
  }
}
