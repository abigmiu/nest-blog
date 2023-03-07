import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from 'src/dto/comment/comment-create.dto';
import { QueryCommentDto } from 'src/dto/comment/comment-query.dto';
import { CommentItemResponse } from 'src/dto/comment/comment-response.dto';
import { CommentEntity } from 'src/entities/comment/comment.entity';
import { ContentEntity } from 'src/entities/content/content.entity';
import { createPageData, createResponse } from 'src/utils/response';
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
        return res;
    }

    /** 回复评论 */
    async createLinkComment(commentId: number, data: CreateCommentDto) {
        const content = await this.commentRepository.findOne({
            where: {
                id: commentId,
                isDel: false,
            },
        });
        if (!content) {
            throw new BadRequestException('评论不存在');
        }

        const comment = new CommentEntity();
        comment.agent = data.agent;
        comment.author = data.author;
        comment.mail = data.email;
        comment.ip = data.ip;
        comment.text = data.text;
        comment.parent = content;

        const res = await this.commentRepository.save(comment);
        console.log(res);
        return res;
    }

    /** 返回所有评论的列表集合 */
    async listComment() {
        const res = await this.commentRepository.find({
            where: {
                isDel: false,
            },
            relations: ['content', 'parent'],
        });
        const handledResult = res.map((item) => createResponse(CommentItemResponse, item));
        return handledResult;
    }

    /**
     * 分页查询
     * @param query
     * @returns
     */
    async queryComment(query: QueryCommentDto) {
        const queryBuilder = this.commentRepository.createQueryBuilder();
        queryBuilder.skip((query.page - 1) * query.size);
        queryBuilder.take(query.size);

        if (query.contentId) {
            queryBuilder.where('contentId = :id', { id: query.contentId });
        }

        const sql = queryBuilder.getSql();
        console.log(sql);

        const res = await queryBuilder.getManyAndCount();
        return createPageData(res[0], res[1]);
    }
}
