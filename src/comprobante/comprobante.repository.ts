import { EntityRepository, Repository } from 'typeorm';
import { Comprobante } from 'src/entity/Comprobante.entity';

@EntityRepository(Comprobante)
export class ComprobanteRepository extends Repository<Comprobante> {}
