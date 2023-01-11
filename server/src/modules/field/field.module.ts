import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldEntity } from 'src/entities/filed/field.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FieldEntity])],
    controllers: [FieldController],
    providers: [FieldService],
})
export class FieldModule {}
