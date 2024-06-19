import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from 'src/entity/Categoria.entity';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  async obtenerTodasLasCategorias(): Promise<Categoria[]> {
    return this.categoriaService.obtenerTodasLasCategorias();
  }

  @Get(':id')
  async obtenerCategoriaPorId(@Param('id') id: number): Promise<Categoria> {
    return this.categoriaService.obtenerCategoriaPorId(id);
  }

  @Post()
  async crearCategoria(@Body() categoriaDto: Categoria): Promise<Categoria> {
    return this.categoriaService.crearCategoria(categoriaDto);
  }

  @Put(':id')
  async actualizarCategoria(
    @Param('id') id: number,
    @Body() categoriaDto: Categoria,
  ): Promise<Categoria> {
    return this.categoriaService.actualizarCategoria(id, categoriaDto);
  }

  @Delete(':id')
  async eliminarCategoria(@Param('id') id: number): Promise<void> {
    return this.categoriaService.eliminarCategoria(id);
  }
}
