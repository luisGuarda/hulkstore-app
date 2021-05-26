import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nextprod',
  templateUrl: './nextprod.component.html'
})
export class NextprodComponent {

  listaProducto: string[] = ['Escudo de Capitan America', 'Silla Gamer Hulk', 'Taza Iron Man', 'Poster Guardianes de la Galaxia', 'Mochila Viuda Negra'];

  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar==true)? false: true;
  }

}
