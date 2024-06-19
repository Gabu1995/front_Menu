import { ConfigModule } from '@nestjs/config';
import { Categoria } from './entity/categoria.entity';
import { Comprobante } from './entity/comprobante.entity';
import { ItemMenu } from './entity/item_menu.entity';
import { Module } from '@nestjs/common';
import { Orden } from './entity/orden.entity';
import { OrdenModule } from './orden/orden.module';
import { Rol } from './entity/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entity/usuario.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { RolModule } from './rol/rol.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRepository } from './usuario/ususario.repository';
import { RolRepository } from './rol/rol.repository';
import { OrdenRepository } from './orden/orden.repository';
import { CategoriaRepository } from './categoria/categoria.repository';
import { ItemMenuRepository } from './item_menu/item_menu.repository';
import { ComprobanteRepository } from './comprobante/comprobante.repository';
import { ComprobanteModule } from './comprobante/comprobante.module';
import { ItemMenuModule } from './item_menu/item_menu.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      //host: 'localhost',
      //port: 5432,
      //username: 'postgres',
      //password: '1234',
      //database: 'digital_menu',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Orden, ItemMenu, Comprobante, Categoria, Usuario, Rol],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Categoria,
      Comprobante,
      ItemMenu,
      Orden,
      Rol,
      Usuario,
      UsuarioRepository,
      RolRepository,
      OrdenRepository,
      ItemMenuRepository,
      ComprobanteRepository,
      CategoriaRepository,
    ]),
    OrdenModule,
    CategoriaModule,
    RolModule,
    UsuarioModule,
    ComprobanteModule,
    ItemMenuModule
  ],
})
export class AppModule {}
