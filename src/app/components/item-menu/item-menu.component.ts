import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MenuService } from '../../services/menu-services/menu.service';
import { ItemMenu } from 'src/app/layout/interfaces/item_menu.interface';


@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent {

  //Comunicacion entre componentes
  @Output() itemsCartEmit = new EventEmitter<ItemMenu[]>();

  //Recibo el mensaje - categoria
  @Input() categoria?: string = '';

  items: ItemMenu[] = [];

  constructor(private menuService: MenuService) { }

  /**
   * Se emitio un nuevo mensaje en caso se seleccione una nueva categoria.
   */
  ngOnChanges() {
    if (this.categoria) {
      this.loadItemsByCategoria(this.categoria);
    }
  }

  loadItemsByCategoria(categoria: string) {
    this.items = this.menuService.getItemsByCategoria(categoria);
    this.itemsCartEmit.emit(this.items);

  }
}
