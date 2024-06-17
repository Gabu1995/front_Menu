import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  /**
   * Get categorias.
   *
   * @returns
   */
  getCategorias() {
    return [
      { id_categoria: 1, nombre: 'Platos', descripcion: 'Platos del día', icon: 'fa fa-utensils' },
      { id_categoria: 2, nombre: 'Bebidas', descripcion: 'Sección de bebidas', icon: 'fa fa-glass-martini-alt' },
      { id_categoria: 3, nombre: 'Postres', descripcion: 'Postres del día', icon: 'fa fa-ice-cream' },
      { id_categoria: 4, nombre: 'Cafe', descripcion: 'Cafe del día', icon: 'fa fa-coffee' },
    ];
  }

}
