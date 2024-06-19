import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ComprobanteService } from './comprobante.service';
import { Comprobante } from 'src/entity/Comprobante.entity';

@Controller('comprobantes')
export class ComprobanteController {
  constructor(private readonly comprobanteService: ComprobanteService) {}

  @Get()
  async obtenerTodosLosComprobantes(): Promise<Comprobante[]> {
    return this.comprobanteService.obtenerTodosLosComprobantes();
  }

  @Get(':id')
  async obtenerComprobantePorId(@Param('id') id: number): Promise<Comprobante> {
    return this.comprobanteService.obtenerComprobantePorId(id);
  }

  @Post()
  async crearComprobante(@Body() comprobanteDto: Comprobante): Promise<Comprobante> {
    return this.comprobanteService.crearComprobante(comprobanteDto);
  }

  @Put(':id')
  async actualizarComprobante(
    @Param('id') id: number,
    @Body() comprobanteDto: Comprobante,
  ): Promise<Comprobante> {
    return this.comprobanteService.actualizarComprobante(id, comprobanteDto);
  }

  @Delete(':id')
  async eliminarComprobante(@Param('id') id: number): Promise<void> {
    return this.comprobanteService.eliminarComprobante(id);
  }
}
