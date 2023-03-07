import { Expose, Transform } from 'class-transformer';
import { CommentEntity } from 'src/entities/comment/comment.entity';

export class CommentItemResponse {
    @Expose()
    @Transform(({ obj }: { obj: CommentEntity }) => {
        console.log(obj);
        const content = obj.content;
        return content ? content.id : null;
    })
    contentId: number;

    @Expose()
    @Transform((data: { obj: CommentEntity }) => {
        const parent = data.obj.parent;
        return parent ? parent.id : null;
    })
    parentId: number;
}
