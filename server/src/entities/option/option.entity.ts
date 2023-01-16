import { Entity, Column, PrimaryColumn } from 'typeorm';

/** 网站选项 */
@Entity('bb-options')
export class OptionEntity {
    @PrimaryColumn({
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
