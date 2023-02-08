import { Entity, Column } from 'typeorm';
import { SharedEntity } from '../base';

/** 壁纸 */
@Entity('bb-wallpaper')
export class WallpaperEntity extends SharedEntity {
    @Column()
    url: string;

    @Column({ default: false, comment: '是否冻结' })
    freeze: boolean;

    @Column({
        default: '',
    })
    remark: string;

    @Column({
        type: 'simple-array',
    })
    tags: string[];
}
