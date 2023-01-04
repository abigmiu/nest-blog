import { Column, Entity } from 'typeorm';
import { SharedEntity } from '../base';

@Entity()
export class MetaEntity extends SharedEntity {
    @Column({
        length: 200,
        comment: '名称',
    })
    name: string;

    @Column({
        length: 200,
        comment: '项目缩略名',
    })
    slug: string;

    @Column({
        length: 32,
        comment: '项目类型',
    })
    type: string;

    @Column({
        length: 200,
        comment: '选项描述',
    })
    description: string;

    @Column({
        comment: '所属',
    })
    count: number;

    @Column({
        comment: '项目排序',
    })
    order: number;
}
