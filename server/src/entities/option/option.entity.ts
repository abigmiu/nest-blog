import { Entity, Column } from 'typeorm';
import { SharedEntity } from '../base';

@Entity('option')
export class OptionEntity extends SharedEntity {
    @Column({
        comment: '字段',
    })
    key: string;

    @Column({
        comment: '名称',
    })
    name: string;

    @Column({
        comment: '值',
    })
    value: string;
}
