import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {

  items: MenuItem[];
  showCategoryComponent: boolean = false;
  showItemComponent: boolean = true;

  constructor() {
    this.items = [
      {label: 'Administración de categoría', command: () => this.showCategory()},
      {label: 'Administración de platos', command: () => this.showItem()}
    ];
  }

  showCategory() {
    this.showCategoryComponent = true;
    this.showItemComponent = false;
  }

  showItem() {
    this.showItemComponent = true;
    this.showCategoryComponent = false;
  }
}
