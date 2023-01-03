import { Column, Entity } from 'typeorm';
import { SharedEntity } from '../base';

@Entity('tag')
export class TagEntity extends SharedEntity {
    @Column()
    name: string;
}
