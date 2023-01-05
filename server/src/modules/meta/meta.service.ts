import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMetaDto } from 'src/dto/meta/create-meta.dto';
import { MetaEntity } from 'src/entities/metas/meta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetaService {
    constructor(
        @InjectRepository(MetaEntity)
        private metaRepo: Repository<MetaEntity>,
    ) {}

    /** 创建 */
    async create(dto: CreateMetaDto) {
        if (dto.parent) {
            const parent = await this.metaRepo.findOne({
                where: {
                    id: dto.parent,
                },
            });
            if (!parent) {
                throw new BadRequestException('父类不存在');
            }
            if (parent.type !== dto.type) {
                throw new BadRequestException('父类 type 与当前 type 不匹配');
            }
        }

        const meta = new MetaEntity();
        meta.name = dto.name;
        meta.type = dto.type;
        meta.slug = dto.slug;
        meta.parent = dto.parent;
        meta.order = dto.order;

        await this.metaRepo.save(meta);
    }
}
