import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
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
