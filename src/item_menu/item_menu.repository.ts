import { EntityRepository, Repository } from 'typeorm';
import { Orden } from 'src/entity/Orden.entity';
import { ItemMenu } from 'src/entity/item_menu.entity';

@EntityRepository(Orden)
export class ItemMenuRepository extends Repository<ItemMenu> {
  async findByCategoriaId(categoriaId: number): Promise<ItemMenu[]> {
    return this.find({
      where: { id_categoria: { id_categoria: categoriaId } },
      relations: ['id_categoria'],
    });
  }
}
