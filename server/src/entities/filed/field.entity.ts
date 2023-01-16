import { Column, Entity, ManyToOne } from 'typeorm';
import { SharedEntity } from '../base';
import { ContentEntity } from '../content/content.entity';

@Entity('bb-fields')
export class FieldEntity extends SharedEntity {
    @ManyToOne(() => ContentEntity)
    content: ContentEntity;

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
