import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaEntity } from 'src/entities/metas/meta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetaService {
    constructor(
        @InjectRepository(MetaEntity)
        private metaRepo: Repository<MetaEntity>,
    ) {}

    /** 创建 */
    create() {
        console.log('create');
    }
}
