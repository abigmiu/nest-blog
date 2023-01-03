import { Column, Entity } from 'typeorm';
import { SharedEntity } from '../base';

@Entity('category')
export class CategoryEntity extends SharedEntity {
    @Column({
        comment: '名字',
        nullable: false,
    })
    name: string;
}
