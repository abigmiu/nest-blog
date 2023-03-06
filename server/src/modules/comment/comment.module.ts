import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from 'src/entities/comment/comment.entity';
import { ContentEntity } from 'src/entities/content/content.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CommentEntity, ContentEntity])],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentModule {}
