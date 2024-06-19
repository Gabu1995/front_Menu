import { Module } from '@nestjs/common';
import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';
import { OrdenRepository } from './orden.repository';
import { Orden } from 'src/entity/orden.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Orden, OrdenRepository])],
  controllers: [OrdenController],
  providers: [OrdenService, OrdenRepository],
})
export class OrdenModule {}
