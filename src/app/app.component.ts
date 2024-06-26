import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriaService } from './services/categoria-services/categoria.service';
import { Categoria } from './layout/interfaces/categoria.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //Comunicacion entre componentes
  @Output() categoriaEmit = new EventEmitter<string>();

  title = 'front-digital-menu';
  categorias: Categoria[] = [];
  activeCategory: Categoria | null = null;
  items: any[] = [];
  visibleSidebar: boolean = false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(res => {
      this.categorias = res;
      this.activeCategory = this.categorias[0];
    });

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Ordenes',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/ordenes']
      },
      {
        label: 'Administración',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/administracion']
      }
    ];

  }

  onCategoryChange(categoria: Categoria) {
    this.activeCategory = categoria;
    this.categoriaEmit.emit(categoria.nombre);
  }

  toggleSidebar() {
    this.visibleSidebar = !this.visibleSidebar;
  }
}
