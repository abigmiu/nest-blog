import { Module } from '@nestjs/common';
import { MetaService } from './meta.service';
import { MetaController } from './meta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaEntity } from 'src/entities/metas/meta.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MetaEntity])],
    controllers: [MetaController],
    providers: [MetaService],
    exports: [MetaService],
})
export class MetaModule {}
