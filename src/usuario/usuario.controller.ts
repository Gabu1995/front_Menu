import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from 'src/entity/Usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async obtenerTodosLosUsuarios(): Promise<Usuario[]> {
    return this.usuarioService.obtenerTodosLosUsuarios();
  }

  @Get(':id')
  async obtenerUsuarioPorId(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.obtenerUsuarioPorId(id);
  }

  @Post()
  async crearUsuario(@Body() usuarioDto: Usuario): Promise<Usuario> {
    return this.usuarioService.crearUsuario(usuarioDto);
  }

  @Put(':id')
  async actualizarUsuario(
    @Param('id') id: number,
    @Body() usuarioDto: Usuario,
  ): Promise<Usuario> {
    return this.usuarioService.actualizarUsuario(id, usuarioDto);
  }

  @Delete(':id')
  async eliminarUsuario(@Param('id') id: number): Promise<void> {
    return this.usuarioService.eliminarUsuario(id);
  }
}
