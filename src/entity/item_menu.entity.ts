import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Categoria } from './categoria.entity';
import { Orden } from './orden.entity';

@Entity()
export class ItemMenu {
  @PrimaryGeneratedColumn()
  id_item: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.items, { eager: true })
  id_categoria: Categoria;

  @Column('decimal', { precision: 3, scale: 1, nullable: true })
  puntaje: number;

  @Column('text', { nullable: true })
  rutaImagen: string;

  @OneToMany(() => Orden, (orden) => orden.id_item)
  ordenes: Orden[];
}
