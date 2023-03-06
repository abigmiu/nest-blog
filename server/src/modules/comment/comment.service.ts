import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from 'src/dto/comment/comment-create.dto';
import { CommentEntity } from 'src/entities/comment/comment.entity';
import { ContentEntity } from 'src/entities/content/content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(CommentEntity)
        private readonly commentRepository: Repository<CommentEntity>,
        @InjectRepository(ContentEntity)
        private readonly contentRepository: Repository<ContentEntity>,
    ) {}

    /**
     * 创建内容评论
     * @param contentId 内容 ID
     */
    async createContentComment(contentId: number, data: CreateCommentDto) {
        const content = await this.contentRepository.findOne({
            where: {
                id: contentId,
                isDel: false,
            },
        });
        if (!content) {
            throw new BadRequestException('文章不存在');
        }

        const comment = new CommentEntity();
        comment.content = content;
        comment.agent = data.agent;
        comment.author = data.author;
        comment.mail = data.email;
        comment.ip = data.ip;
        comment.text = data.text;

        const res = await this.commentRepository.save(comment);
        console.log(res);
    }

    /** 返回所有评论的列表集合 */
    async listComment() {
        const res = await this.commentRepository.find();
        return res;
    }
}
