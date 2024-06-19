import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { Orden } from 'src/entity/Orden.entity';

@Controller('ordenes')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) {}

  @Get()
  async obtenerTodasLasOrdenes(): Promise<Orden[]> {
    return this.ordenService.obtenerTodasLasOrdenes();
  }

  @Get(':id')
  async obtenerOrdenPorId(@Param('id') id: number): Promise<Orden> {
    return this.ordenService.obtenerOrdenPorId(id);
  }

  @Post()
  async crearOrden(@Body() ordenDto: Orden): Promise<Orden> {
    return this.ordenService.crearOrden(ordenDto);
  }

  @Put(':id')
  async actualizarOrden(
    @Param('id') id: number,
    @Body() ordenDto: Orden,
  ): Promise<Orden> {
    return this.ordenService.actualizarOrden(id, ordenDto);
  }

  @Delete(':id')
  async eliminarOrden(@Param('id') id: number): Promise<void> {
    return this.ordenService.eliminarOrden(id);
  }
}
