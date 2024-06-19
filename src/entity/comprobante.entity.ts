import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Orden } from './orden.entity';

@Entity()
export class Comprobante {
  @PrimaryGeneratedColumn()
  id_comprobante: number;

  @ManyToOne(() => Orden, (orden) => orden.id_orden)
  id_orden: Orden;

  @Column()
  numero_comprobante: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column()
  fecha: Date;
}
