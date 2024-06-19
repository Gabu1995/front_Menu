import { EntityRepository, Repository } from 'typeorm';
import { Rol } from 'src/entity/Rol.entity';

@EntityRepository(Rol)
export class RolRepository extends Repository<Rol> {}
