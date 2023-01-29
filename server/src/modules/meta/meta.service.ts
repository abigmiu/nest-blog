import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { metaTypes } from 'src/constant/meta';
import { CreateMetaDto } from 'src/dto/meta/create-meta.dto';
import { MetaEntity } from 'src/entities/metas/meta.entity';
import { IMetaTypeValue } from 'src/types/meta.type';
import { Repository } from 'typeorm';

@Injectable()
export class MetaService {
    constructor(
        @InjectRepository(MetaEntity)
        private metaRepo: Repository<MetaEntity>,
    ) {}

    /** 创建 */
    async create(dto: CreateMetaDto) {
        if (dto.parentId) {
            const parent = await this.metaRepo.findOne({
                where: {
                    id: dto.parentId,
                },
            });
            if (!parent) {
                throw new BadRequestException('父类不存在');
            }
            if (parent.type !== dto.type) {
                throw new BadRequestException('父类 type 与当前 type 不匹配');
            }
        }

        const sameNameData = await this.metaRepo.findOne({
            where: {
                type: dto.type,
                name: dto.name,
            },
        });
        if (sameNameData) {
            throw new BadRequestException('该 type 存在相同的 name');
        }
        const meta = new MetaEntity();
        meta.name = dto.name;
        meta.type = dto.type;
        meta.slug = dto.slug || dto.name;
        meta.parentId = dto.parentId;
        meta.order = dto.order;

        await this.metaRepo.save(meta);
    }

    /** 查找某一个 meta 的所有数据 */
    async findListForOne(key: IMetaTypeValue) {
        const metas = Object.values(metaTypes);
        if (!metas.includes(key)) {
            throw new BadRequestException('该 meta 不存在');
        }

        const list = await this.metaRepo.find({
            where: {
                type: key,
            },
        });

        return list;
    }

    async createContentTags(data: string[]) {
        const tags: MetaEntity[] = [];
        for (let i = 0; i < data.length; i++) {
            const exitedData = await this.metaRepo.findOne({
                where: {
                    name: data[i],
                    type: metaTypes.tag,
                },
            });
            if (exitedData) {
                tags.push(exitedData);
                continue;
            }

            const tag = new MetaEntity();
            tag.name = data[i];

            const res = await this.metaRepo.save(tag);
            tags.push(res);
        }

        return tags;
    }
}
