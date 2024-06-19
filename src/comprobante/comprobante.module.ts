import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprobanteRepository } from './comprobante.repository';
import { ComprobanteService } from './comprobante.service';
import { ComprobanteController } from './comprobante.controller';
import { Comprobante } from 'src/entity/comprobante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comprobante, ComprobanteRepository])],
  controllers: [ComprobanteController],
  providers: [ComprobanteService, ComprobanteRepository],
})
export class ComprobanteModule {}
