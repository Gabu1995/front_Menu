import { EntityRepository, Repository } from 'typeorm';
import { Orden } from 'src/entity/Orden.entity';

@EntityRepository(Orden)
export class OrdenRepository extends Repository<Orden> {}
