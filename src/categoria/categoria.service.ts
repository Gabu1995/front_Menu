import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from 'src/entity/Categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async obtenerTodasLasCategorias(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async obtenerCategoriaPorId(id: number): Promise<Categoria> {
    return this.categoriaRepository.findOne({ where: { id_categoria: id } });
  }

  async crearCategoria(categoriaDto: Categoria): Promise<Categoria> {
    const nuevaCategoria = this.categoriaRepository.create(categoriaDto);
    return this.categoriaRepository.save(nuevaCategoria);
  }

  async actualizarCategoria(id: number, categoriaDto: Categoria): Promise<Categoria> {
    await this.categoriaRepository.update(id, categoriaDto);
    return this.obtenerCategoriaPorId(id);
  }

  async eliminarCategoria(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}
