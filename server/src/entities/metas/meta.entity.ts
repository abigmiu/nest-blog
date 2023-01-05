import { IsOptional } from 'class-validator';
import { IMetaTypeValue } from 'src/types/meta.type';
import { Column, Entity } from 'typeorm';
import { SharedEntity } from '../base';

@Entity('meta')
export class MetaEntity extends SharedEntity {
    @Column({
        length: 200,
        comment: '名称',
    })
    name: string;

    @Column({
        length: 200,
        comment: '项目缩略名',
        nullable: true,
    })
    @IsOptional()
    slug?: string;

    @Column({
        length: 32,
        comment: '项目类型',
    })
    type: IMetaTypeValue;

    @Column({
        length: 200,
        comment: '选项描述',
        default: null,
    })
    description: string;

    @Column({
        comment: '所属',
        default: 0,
    })
    count: number;

    @Column({
        comment: '项目排序',
        default: 0,
    })
    order: number;

    @Column({
        comment: '父级分类',
        default: 0,
    })
    parent: number;
}
