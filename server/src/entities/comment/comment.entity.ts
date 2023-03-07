import { Exclude } from 'class-transformer';
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

    @Exclude()
    @Column({
        comment: '评论用户ID',
        nullable: true,
    })
    authorId: number;

    @Exclude()
    @Column({
        length: 200,
        comment: '评论用户邮箱',
    })
    mail: string;

    @Column({
        length: 200,
        comment: '评论用户网址',
        nullable: true,
    })
    url: string;

    @Exclude()
    @Column({
        length: 64,
        comment: '评论IP',
        nullable: true,
    })
    ip: string;

    @Column({
        length: 200,
        comment: '评论 useAgent',
        nullable: true,
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
