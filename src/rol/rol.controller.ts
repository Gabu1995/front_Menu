import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { Rol } from 'src/entity/rol.entity';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Get()
  async obtenerTodosLosRoles(): Promise<Rol[]> {
    return this.rolService.obtenerTodosLosRoles();
  }

  @Get(':id')
  async obtenerRolPorId(@Param('id') id: number): Promise<Rol> {
    return this.rolService.obtenerRolePorId(id);
  }

  @Post()
  async crearRol(@Body() rolDto: Rol): Promise<Rol> {
    return this.rolService.crearRole(rolDto);
  }

  @Put(':id')
  async actualizarRol(
    @Param('id') id: number,
    @Body() rolDto: Rol,
  ): Promise<Rol> {
    return this.rolService.actualizarRole(id, rolDto);
  }

  @Delete(':id')
  async eliminarRol(@Param('id') id: number): Promise<void> {
    return this.rolService.eliminarRole(id);
  }
}
