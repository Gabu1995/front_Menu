import { Orden } from "./orden.inteface";

export interface ItemMenu {
  id_item?: number;
  nombre?: string;
  descripcion: string;
  precio: number;
  puntaje?: number;
  estado?: string;
  rutaImagen?: string;
  id_categoria?:number;
  nombreCategoria?:string;

  orden: Orden;
}
