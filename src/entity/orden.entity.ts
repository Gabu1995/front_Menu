import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ItemMenu } from './item_menu.entity';

@Entity()
export class Orden {
  @PrimaryGeneratedColumn()
  id_orden: number;

  @ManyToOne(() => ItemMenu, (item) => item.ordenes)
  id_item: ItemMenu;

  @Column()
  cantidad: number;
}
