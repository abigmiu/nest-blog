import { Entity, Column } from 'typeorm';
import { SharedEntity } from '../base';

@Entity('bb-contents')
export class ContentEntity extends SharedEntity {
    @Column({
        length: 200,
        nullable: true,
        comment: '标题',
    })
    title?: string;

    @Column({
        comment: '摘要',
    })
    summary: string;

    @Column({
        length: 200,
        nullable: true,
        comment: '缩写',
    })
    slug?: string;

    @Column({
        type: 'text',
        comment: '内容',
    })
    text: string;

    @Column({
        default: 0,
        comment: '排序',
    })
    order: number;

    @Column({
        length: 16,
        comment: '类型',
        nullable: true,
    })
    type: string;

    @Column({
        length: 16,
        comment: '内容状态',
        nullable: true,
    })
    status: string;

    @Column({
        length: 32,
        comment: '内容保护密码',
        nullable: true,
    })
    password: string;

    @Column({
        comment: '评论数',
        default: 0,
    })
    commentsNum: number;

    @Column({
        comment: '是否允许评论',
        default: true,
    })
    allowComment: boolean;
}
