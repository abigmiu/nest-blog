import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateCommentDto } from 'src/dto/comment/comment-create.dto';
import { IdParam } from 'src/dto/param.dto';
import { CommentService } from './comment.service';

class createCommentIdParam extends IdParam {
    @ApiProperty({ description: '内容 ID' })
    id: number;
}

@ApiTags('评论')
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @ApiOperation({ summary: '创建评论' })
    @Post(':id')
    createComment(@Param() param: createCommentIdParam, @Body() data: CreateCommentDto) {
        return this.commentService.createContentComment(param.id, data);
    }

    @ApiOperation({ summary: '评论列表' })
    @Get('list')
    listComment() {
        return this.commentService.listComment();
    }
}
