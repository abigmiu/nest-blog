import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentEntity } from 'src/entities/content/content.entity';
import { MetaModule } from '../meta/meta.module';
import { WallpaperEntity } from 'src/entities/wallpaper/wallpaper.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ContentEntity, WallpaperEntity]), MetaModule],
    controllers: [ContentController],
    providers: [ContentService],
})
export class ContentModule {}
