import { ItemMenu } from './../entity/item_menu.entity';
import { Module } from '@nestjs/common';
import { ItemMenuController } from './item_menu.controller';
import { ItemMenuService } from './item_menu.service';
import { ItemMenuRepository } from './item_menu.repository';
import { Orden } from 'src/entity/orden.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemMenu, ItemMenuRepository])],
  controllers: [ItemMenuController],
  providers: [ItemMenuService, ItemMenuRepository],
})
export class ItemMenuModule {}
