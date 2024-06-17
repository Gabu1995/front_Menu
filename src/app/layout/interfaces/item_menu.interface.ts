import { Orden } from "./orden.inteface";

export interface ItemMenu {
  id_item?: number;
  nombre?: string;
  descripcion: string;
  precio: number;
  puntaje?: number;
  estado?: string;
  rutaImagen?: string;

  orden: Orden;
}
