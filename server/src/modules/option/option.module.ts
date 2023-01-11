import { Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionEntity } from 'src/entities/option/option.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OptionEntity])],
    controllers: [OptionController],
    providers: [OptionService],
})
export class OptionModule {}
