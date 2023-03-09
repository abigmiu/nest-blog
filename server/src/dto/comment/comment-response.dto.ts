import { Expose, Transform } from 'class-transformer';
import { CommentEntity } from 'src/entities/comment/comment.entity';

export class CommentItemResponse {
    @Expose()
    @Transform(({ obj }: { obj: CommentEntity }) => {
        const res = obj.content ? obj.content.id : null;
        return res;
    })
    contentId: number;

    @Expose()
    @Transform(({ obj }: { obj: CommentEntity }) => {
        const res = obj.parent ? obj.parent.id : null;
        return res;
    })
    parentId: number;
}
