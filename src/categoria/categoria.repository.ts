import { EntityRepository, Repository } from 'typeorm';
import { Categoria } from 'src/entity/Categoria.entity';

@EntityRepository(Categoria)
export class CategoriaRepository extends Repository<Categoria> {}
