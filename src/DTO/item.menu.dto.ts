import { ItemMenu } from 'src/entity/item_menu.entity';

export class ItemMenuDto {
  id_item: number;
  nombre: string;
  descripcion: string;
  precio: number;
  id_categoria: number;
  puntaje: number;
  rutaImagen: string;
  nombreCategoria:string;

  constructor(itemMenu: ItemMenu) {
    this.id_item = itemMenu.id_item;
    this.nombre = itemMenu.nombre;
    this.descripcion = itemMenu.descripcion;
    this.precio = itemMenu.precio;
    this.id_categoria = itemMenu.id_categoria ? itemMenu.id_categoria.id_categoria : null;
    this.nombreCategoria = itemMenu.id_categoria ? itemMenu.id_categoria.nombre : null;
    this.puntaje = itemMenu.puntaje;
    this.rutaImagen = itemMenu.rutaImagen;
  }
}
