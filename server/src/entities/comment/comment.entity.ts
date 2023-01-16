import { Column, Entity, ManyToOne } from 'typeorm';
import { SharedEntity } from '../base';
import { ContentEntity } from '../content/content.entity';

@Entity('bb-comment')
export class CommentEntity extends SharedEntity {
    @ManyToOne(() => ContentEntity)
    content: ContentEntity;

    @ManyToOne(() => CommentEntity)
    parent: CommentEntity;

    @Column({
        length: 200,
        comment: '评论用户名称',
    })
    author: string;

    @Column({
        default: 0,
        comment: '评论用户ID',
    })
    authorId: number;

    @Column({
        length: 200,
        comment: '评论用户邮箱',
    })
    mail: string;

    @Column({
        length: 200,
        comment: '评论用户网址',
    })
    url: string;

    @Column({
        length: 64,
        comment: '评论IP',
    })
    ip: string;

    @Column({
        length: 200,
        comment: '评论 useAgent',
    })
    agent: string;

    @Column({
        type: 'text',
    })
    text: string;

    @Column({
        default: 0,
    })
    status: number;
}
