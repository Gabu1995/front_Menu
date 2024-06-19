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
}
