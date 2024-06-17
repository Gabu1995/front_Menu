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

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categorias = this.categoriaService.getCategorias();
    this.activeCategory = this.categorias[0];
  }

  onCategoryChange(categoria: Categoria) {
    this.activeCategory = categoria;
    this.categoriaEmit.emit(categoria.nombre);
  }
}
