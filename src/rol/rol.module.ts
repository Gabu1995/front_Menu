import { Module } from '@nestjs/common';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';
import { RolRepository } from './rol.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from 'src/entity/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol, RolRepository])],
  controllers: [RolController],
  providers: [RolService, RolRepository],
})
export class RolModule {}
