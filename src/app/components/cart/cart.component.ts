import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart-services/cart.service';
import { ItemMenu } from 'src/app/layout/interfaces/item_menu.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items: ItemMenu[] = [];
  cartEmpty: boolean = true;
  cantidadTotal: number = 0;
  total: number = 0;

  //Recibo el mensaje - categoria
  @Input() itemsMenu: ItemMenu[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnChanges() {
    if (this.itemsMenu) {
      this.items = this.itemsMenu;
      this.cantidadTotal = 0;
      this.total = 0;
      this.cartEmpty = true;
    }
  }

  incrementQuantity(itemAdd: ItemMenu) {
    this.items.forEach(item => {
      if (item.nombre === itemAdd.nombre) {
        item.orden.cantidad++;
        this.cantidadTotal++;
        this.total += itemAdd.precio;
      }
    });
    this.updateCartEmpty();

  }

  decrementQuantity(itemAdd: ItemMenu) {
    this.items.forEach(item => {
      if (item.nombre === itemAdd.nombre && item.orden.cantidad > 0) {
        item.orden.cantidad--;
        this.cantidadTotal--;
        this.total -= itemAdd.precio;
        this.updateCartEmpty();
      }
    });
  }

  updateCartEmpty() {
    this.cartEmpty = this.cantidadTotal === 0 && this.total === 0;
  }

  checkout() {
    this.cartEmpty = true;
    this.cantidadTotal = 0;
    this.total = 0;
  }
}
