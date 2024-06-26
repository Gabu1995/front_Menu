import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemMenu } from 'src/app/layout/interfaces/item_menu.interface';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:3000/items-menu';

  constructor(private http: HttpClient) { }

  getItemsByCategoria(categoriaId: number): Observable<ItemMenu[]> {
    return this.http.get<ItemMenu[]>(`${this.apiUrl}/categoria/${categoriaId}`);
  }

  obtenerTodosLosItemsMenu(): Observable<ItemMenu[]> {
    return this.http.get<ItemMenu[]>(this.apiUrl);
  }

  obtenerItemMenuPorId(id: number): Observable<ItemMenu> {
    return this.http.get<ItemMenu>(`${this.apiUrl}/${id}`);
  }

  crearItemMenu(itemMenu: ItemMenu): Observable<ItemMenu> {
    let nuevoItemMenu = {
      descripcion: itemMenu.descripcion,
      precio: itemMenu.precio,
      nombre: itemMenu.nombre,
      rutaImagen: itemMenu.rutaImagen,
      id_categoria:itemMenu.id_categoria
    }
    return this.http.post<ItemMenu>(this.apiUrl, nuevoItemMenu);
  }

  actualizarItemMenu(id: number, itemMenu: ItemMenu): Observable<ItemMenu> {
    let nuevoItemMenu = {
      id_item:itemMenu.id_item,
      descripcion: itemMenu.descripcion,
      precio: itemMenu.precio,
      nombre: itemMenu.nombre,
      rutaImagen: itemMenu.rutaImagen,
      id_categoria:itemMenu.id_categoria
    }
    return this.http.put<ItemMenu>(`${this.apiUrl}/${id}`, nuevoItemMenu);
  }

  eliminarItemMenu(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getItemsByCategoriaId(id: number): Observable<ItemMenu[]> {
    return this.http.get<ItemMenu[]>(`${this.apiUrl}/categoria/${id}`);
  }
}
