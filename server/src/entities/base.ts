import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class SharedEntity {
    @PrimaryGeneratedColumn({
        comment: '主键',
    })
    id: number;

    @CreateDateColumn({
        comment: '创建时间',
    })
    createAt: Date;

    @UpdateDateColumn({
        comment: '更新时间',
    })
    updateAt: Date;

    @Column({
        comment: '软删除',
        default: false,
    })
    isDel: boolean;
}
