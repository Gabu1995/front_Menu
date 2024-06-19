import { Module } from '@nestjs/common';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { CategoriaRepository } from './categoria.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/entity/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria, CategoriaRepository])],
  controllers: [CategoriaController],
  providers: [CategoriaService, CategoriaRepository],
})
export class CategoriaModule {}
