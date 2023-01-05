import { Column, Entity } from 'typeorm';
import { SharedEntity } from '../base';

@Entity()
export class FieldEntity extends SharedEntity {
    @Column({
        comment: '名称',
    })
    name: string;

    @Column({
        comment: '字段',
    })
    key: string;

    @Column({
        comment: '值',
        type: 'text',
    })
    value: string;
}
