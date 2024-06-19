import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comprobante } from 'src/entity/Comprobante.entity';

@Injectable()
export class ComprobanteService {
  constructor(
    @InjectRepository(Comprobante)
    private readonly comprobanteRepository: Repository<Comprobante>,
  ) {}

  async obtenerTodosLosComprobantes(): Promise<Comprobante[]> {
    return this.comprobanteRepository.find();
  }

  async obtenerComprobantePorId(id: number): Promise<Comprobante> {
    return this.comprobanteRepository.findOne({ where: { id_comprobante: id } });
  }

  async crearComprobante(comprobanteDto: Comprobante): Promise<Comprobante> {
    const nuevoComprobante = this.comprobanteRepository.create(comprobanteDto);
    return this.comprobanteRepository.save(nuevoComprobante);
  }

  async actualizarComprobante(id: number, comprobanteDto: Comprobante): Promise<Comprobante> {
    await this.comprobanteRepository.update(id, comprobanteDto);
    return this.obtenerComprobantePorId(id);
  }

  async eliminarComprobante(id: number): Promise<void> {
    await this.comprobanteRepository.delete(id);
  }
}
