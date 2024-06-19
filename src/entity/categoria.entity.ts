import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ItemMenu } from './item_menu.entity';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column('text', { nullable: true })  
  icon: string;

  @OneToMany(() => ItemMenu, (item) => item.id_categoria)
  items: ItemMenu[];
}
