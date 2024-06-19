import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/layout/interfaces/categoria.interface';
import { CategoriaService } from 'src/app/services/categoria-services/categoria.service';

@Component({
  selector: 'app-orden-menu',
  templateUrl: './orden-menu.component.html',
  styleUrls: ['./orden-menu.component.css']
})
export class OrdenMenuComponent implements OnInit {

  @Output() categoriaEmit = new EventEmitter<string>();

  title = 'front-digital-menu';
  categorias: Categoria[] = [];
  activeCategory: Categoria | null = null;
  items: any[] = [];
  visibleSidebar: boolean = false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe(res => {
      this.categorias = res;
      this.activeCategory = this.categorias[0];
    });
  }

  onCategoryChange(categoria: Categoria) {
    this.activeCategory = categoria;
    this.categoriaEmit.emit(categoria.nombre);
  }

}
