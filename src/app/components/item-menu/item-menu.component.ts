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
  @Input() categoria?: number = 0;

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

  loadItemsByCategoria(categoria: number) {
    this.menuService.getItemsByCategoria(categoria).subscribe(res => {
      this.items = res;
      this.items.forEach(i => {
        i.orden = {cantidad:0}
      });
      this.itemsCartEmit.emit(this.items);
    });

  }
}
