import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/layout/interfaces/categoria.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:3000/categoria';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  getCategoriasQuemado() {
    return [
      { id_categoria: 1, nombre: 'Platos', descripcion: 'Platos del día', icon: 'fa fa-utensils' },
      { id_categoria: 2, nombre: 'Bebidas', descripcion: 'Sección de bebidas', icon: 'fa fa-glass-martini-alt' },
      { id_categoria: 3, nombre: 'Postres', descripcion: 'Postres del día', icon: 'fa fa-ice-cream' },
      { id_categoria: 4, nombre: 'Cafe', descripcion: 'Cafe del día', icon: 'fa fa-coffee' },
    ];
  }
}
