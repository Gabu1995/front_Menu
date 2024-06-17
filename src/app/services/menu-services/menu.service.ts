import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getItemsByCategoria(categoria: string) {
    if (categoria === 'Platos') {
      return [
        { nombre: 'Bandera', precio: 5.25, descripcion: 'Bandera 100% real no feike 1 link', puntaje: 1.9, rutaImagen: 'https://i.ytimg.com/vi/mH4Pe9rkrVU/maxresdefault.jpg', estado: 'En venta', orden: { cantidad: 0 } },
        { nombre: 'Encebollado', precio: 4.33, descripcion: 'Comes with a vegetable sauce', puntaje: 2.9, rutaImagen: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Semifinal_del_Campeonato_del_Encebollado_en_Esmeraldas_2015_%2818062294436%29.jpg', estado: 'En venta', orden: { cantidad: 0 } },
        { nombre: 'Caucara', precio: 2.25, descripcion: 'Comes with a vegetable sauce', puntaje: 3.9, rutaImagen: 'https://i.ytimg.com/vi/BhRZtEK1HkU/maxresdefault.jpg', estado: 'En venta', orden: { cantidad: 0 } },
        { nombre: 'Seco de pollo', precio: 2.25, descripcion: 'Comes with a vegetable sauce', puntaje: 4.9, rutaImagen: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/f1ee61b9ed5f51e6450ac4175d929eab.jpg', estado: 'En venta', orden: { cantidad: 0 } },
        { nombre: 'Chuleta con arroz', precio: 3.44, descripcion: 'Comes with a vegetable sauce', puntaje: 5, rutaImagen: 'https://carolinarice.com/wp-content/uploads/2020/04/Key_West_Pork_Chop_and_Rice-025-Carolina_16x9.jpg', estado: 'En venta', orden: { cantidad: 0 } },
        { nombre: 'Sopa de pollo', precio: 2.33, descripcion: 'Comes with a vegetable sauce', puntaje: 0, rutaImagen: 'https://especiasmontero.com/wp-content/uploads/2018/02/CaldoDePollo-1.jpg', estado: 'En venta', orden: { cantidad: 0 } }
      ];
    } else if (categoria === 'Bebidas') {
      return [{ nombre: 'Juguito', precio: 8, descripcion: 'Juguito de agua', puntaje: 1.9, rutaImagen: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', estado: 'En venta', orden: { cantidad: 0 } },
      ];
    } else if (categoria === 'Cafe') {
      return [{ nombre: 'Cafe con leche', precio: 8, descripcion: 'Cafe con leche de tu tio', puntaje: 4, rutaImagen: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg', estado: 'En venta', orden: { cantidad: 0 } },
      ];
    } else {
      return [];
    }

  }

  getBebidas() {
    return [
      // Añadir datos de bebidas aquí
    ];
  }

  getPostres() {
    return [
      // Añadir datos de postres aquí
    ];
  }

}
