import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemMenuService } from './item_menu.service';
import { ItemMenu } from 'src/entity/item_menu.entity';
import { ItemMenuDto } from 'src/DTO/item.menu.dto';


@Controller('items-menu')
export class ItemMenuController {
  constructor(private readonly itemMenuService: ItemMenuService) {}

  @Get()
  async obtenerTodosLosItemsMenu(): Promise<ItemMenuDto[]> {
    return this.itemMenuService.obtenerTodosLosItemsMenu();
  }

  @Get(':id')
  async obtenerItemMenuPorId(@Param('id') id: number): Promise<ItemMenu> {
    return this.itemMenuService.obtenerItemMenuPorId(id);
  }

  @Post()
  async crearItemMenu(@Body() itemMenuDto: ItemMenu): Promise<ItemMenu> {
    return this.itemMenuService.crearItemMenu(itemMenuDto);
  }

  @Put(':id')
  async actualizarItemMenu(
    @Param('id') id: number,
    @Body() itemMenuDto: ItemMenu,
  ): Promise<ItemMenu> {
    return this.itemMenuService.actualizarItemMenu(id, itemMenuDto);
  }

  @Delete(':id')
  async eliminarItemMenu(@Param('id') id: number): Promise<void> {
    return this.itemMenuService.eliminarItemMenu(id);
  }

  @Get('categoria/:id')
  async getItemsByCategoriaId(@Param('id') id: number): Promise<ItemMenu[]> {
    return this.itemMenuService.getItemsByCategoriaId(id);
  }
}
