import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entity/Usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async obtenerTodosLosUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async obtenerUsuarioPorId(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { id_usuario: id } });
  }

  async crearUsuario(usuarioDto: Usuario): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(usuarioDto);
    return this.usuarioRepository.save(nuevoUsuario);
  }

  async actualizarUsuario(id: number, usuarioDto: Usuario): Promise<Usuario> {
    await this.usuarioRepository.update(id, usuarioDto);
    return this.obtenerUsuarioPorId(id);
  }

  async eliminarUsuario(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
