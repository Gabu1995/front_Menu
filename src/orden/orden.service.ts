import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from 'src/entity/Orden.entity';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,
  ) {}

  async obtenerTodasLasOrdenes(): Promise<Orden[]> {
    return this.ordenRepository.find();
  }

  async obtenerOrdenPorId(id: number): Promise<Orden> {
    return this.ordenRepository.findOne({ where: { id_orden: id } });
  }

  async crearOrden(ordenDto: Orden): Promise<Orden> {
    const nuevaOrden = this.ordenRepository.create(ordenDto);
    return this.ordenRepository.save(nuevaOrden);
  }

  async actualizarOrden(id: number, ordenDto: Orden): Promise<Orden> {
    await this.ordenRepository.update(id, ordenDto);
    return this.obtenerOrdenPorId(id);
  }

  async eliminarOrden(id: number): Promise<void> {
    await this.ordenRepository.delete(id);
  }
}
