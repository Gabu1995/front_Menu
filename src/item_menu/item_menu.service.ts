import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemMenuDto } from 'src/DTO/item.menu.dto';
import { ItemMenu } from 'src/entity/item_menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemMenuService {
  constructor(
    @InjectRepository(ItemMenu)
    private readonly itemMenuRepository: Repository<ItemMenu>,
  ) {}

  async obtenerTodosLosItemsMenu(): Promise<ItemMenuDto[]> {
    const itemsMenu = await this.itemMenuRepository.find();
    return itemsMenu.map(item => new ItemMenuDto(item));
  }

  async obtenerItemMenuPorId(id: number): Promise<ItemMenu> {
    return this.itemMenuRepository.findOne({ where: { id_item: id } });
  }

  async crearItemMenu(itemMenuDto: ItemMenu): Promise<ItemMenu> {
    const nuevoItemMenu = this.itemMenuRepository.create(itemMenuDto);
    return this.itemMenuRepository.save(nuevoItemMenu);
  }

  async actualizarItemMenu(id: number, itemMenuDto: ItemMenu): Promise<ItemMenu> {
    await this.itemMenuRepository.update(id, itemMenuDto);
    return this.obtenerItemMenuPorId(id);
  }

  async eliminarItemMenu(id: number): Promise<void> {
    await this.itemMenuRepository.delete(id);
  }

  async getItemsByCategoriaId(categoriaId: number): Promise<ItemMenu[]> {
    return this.itemMenuRepository.createQueryBuilder('item_menu')
    .where('item_menu.id_categoria = :categoriaId', { categoriaId })
    .leftJoinAndSelect('item_menu.id_categoria', 'categoria')
    .getMany();
  }
}
