import { Component } from '@angular/core';
import { ItemMenu } from 'src/app/layout/interfaces/item_menu.interface';
import { MenuService } from 'src/app/services/menu-services/menu.service';

@Component({
  selector: 'app-item-admin',
  templateUrl: './item-admin.component.html',
  styleUrls: ['./item-admin.component.css']
})
export class ItemAdminComponent {

  itemsMenu: ItemMenu[] = [];
  displayRegistro: boolean = false;
  nuevoItemMenu: ItemMenu = {
    descripcion: '',
    precio: 0,
    estado: '',
    rutaImagen: '',
    orden:{
      cantidad:0
    }
  };
  itemSeleccionado: ItemMenu | null = null;

  constructor(private itemMenuService: MenuService) {}

  ngOnInit() {
    this.obtenerItemsMenu();
  }

  obtenerItemsMenu() {
    this.itemMenuService.obtenerTodosLosItemsMenu().subscribe(res => {
      if (res) {
        this.itemsMenu = res;
      }
    });
  }

  mostrarDialogoRegistro() {
    this.displayRegistro = true;
  }

  editarItemMenu(item: ItemMenu) {
    this.itemSeleccionado = item;
    this.nuevoItemMenu = { ...item };
    this.mostrarDialogoRegistro();
  }

  eliminarItemMenu(id: number) {
    this.itemMenuService.eliminarItemMenu(id).subscribe(() => {
      this.obtenerItemsMenu();
    });
  }

  registrarItemMenu() {
    if (this.itemSeleccionado) {
      this.itemMenuService.actualizarItemMenu(this.itemSeleccionado.id_item!, this.nuevoItemMenu).subscribe(() => {
        this.obtenerItemsMenu();
      });
      this.itemSeleccionado = null;
    } else {
      if(this.nuevoItemMenu.rutaImagen == '' || this.nuevoItemMenu.rutaImagen == null){
        this.nuevoItemMenu.rutaImagen = 'https://programacion.net/files/article/20161110041116_image-not-found.png';
      }
      this.itemMenuService.crearItemMenu(this.nuevoItemMenu).subscribe(() => {
        this.obtenerItemsMenu();
      });
    }
    this.displayRegistro = false;
    this.nuevoItemMenu = {
      descripcion: '',
      precio: 0,
      estado: '',
      rutaImagen: '',
      orden:{
        cantidad:0
      }
    };
  }

}
