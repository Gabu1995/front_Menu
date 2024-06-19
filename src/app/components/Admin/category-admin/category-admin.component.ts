import { CategoriaService } from 'src/app/services/categoria-services/categoria.service';
import { Component } from '@angular/core';
import { Categoria } from 'src/app/layout/interfaces/categoria.interface';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css'],
})
export class CategoryAdminComponent {
  categorias: Categoria[] = [];
  displayRegistro: boolean = false;
  nuevaCategoria: Categoria = {
    id_categoria: 0,
    nombre: '',
    descripcion: '',
    icon: '',
  };

  constructor(private service:CategoriaService){
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.service.obtenerTodasLasCategorias().subscribe(res => {
      console.log(res);
      if(res){
        this.categorias = res;
      }
    });
  }

  categoriaSeleccionada: Categoria | null = null;

  // Métodos para editar y eliminar categorías
  editarCategoria(categoria: Categoria) {
    // Asignamos la categoría seleccionada para editar
    this.categoriaSeleccionada = categoria;
    // Copiamos la categoría seleccionada al objeto nuevaCategoria para inicializar los campos del formulario
    this.nuevaCategoria = { ...categoria };
    // Mostramos el diálogo de registro
    this.mostrarDialogoRegistro();
  }

  eliminarCategoria(categoria: Categoria) {
    // Lógica para eliminar la categoría
    if(categoria){
      this.service.eliminarCategoria(categoria.id_categoria).subscribe(res => {
        this.obtenerCategorias();
      });
    }
  }

  // Método para mostrar el diálogo de registro de nueva categoría
  mostrarDialogoRegistro() {
    this.displayRegistro = true;
  }

  // Método para registrar nueva categoría
  registrarCategoria() {

    if (this.categoriaSeleccionada) {
      console.log(this.categoriaSeleccionada)
      this.service.actualizarCategoria(this.categoriaSeleccionada.id_categoria, this.nuevaCategoria).subscribe(res => {
        console.log("asdasdasdasdasd")
    console.log(res)
        this.obtenerCategorias();
      });
      this.categoriaSeleccionada = null;
      this.displayRegistro = false;
    } else {
      this.service.crearCategoria(this.nuevaCategoria).subscribe(res => {
        this.obtenerCategorias();
      });
      this.displayRegistro = false;
      this.nuevaCategoria = {
        id_categoria: 0,
        nombre: '',
        descripcion: '',
        icon: '',
      };
    }

  }
}
