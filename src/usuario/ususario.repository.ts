import { EntityRepository, Repository } from 'typeorm';
import { Usuario } from 'src/entity/Usuario.entity';

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {}
