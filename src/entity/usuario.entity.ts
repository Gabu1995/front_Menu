import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Rol } from './rol.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Rol, (rol) => rol.usuarios)
  rol: Rol;
}
