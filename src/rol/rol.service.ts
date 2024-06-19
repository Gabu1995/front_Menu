import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from 'src/entity/rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly roleRepository: Repository<Rol>,
  ) {}

  async obtenerTodosLosRoles(): Promise<Rol[]> {
    return this.roleRepository.find();
  }

  async obtenerRolePorId(id: number): Promise<Rol> {
    return this.roleRepository.findOne({ where: { id_rol: id } });
  }

  async crearRole(roleDto: Rol): Promise<Rol> {
    const nuevoRole = this.roleRepository.create(roleDto);
    return this.roleRepository.save(nuevoRole);
  }

  async actualizarRole(id: number, roleDto: Rol): Promise<Rol> {
    await this.roleRepository.update(id, roleDto);
    return this.obtenerRolePorId(id);
  }

  async eliminarRole(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
