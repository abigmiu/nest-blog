import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentEntity } from 'src/entities/content/content.entity';
import { MetaModule } from '../meta/meta.module';

@Module({
    imports: [TypeOrmModule.forFeature([ContentEntity]), MetaModule],
    controllers: [ContentController],
    providers: [ContentService],
})
export class ContentModule {}
