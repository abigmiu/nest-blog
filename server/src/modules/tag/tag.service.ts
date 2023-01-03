import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from 'src/entities/tag/tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(TagEntity)
        private tagRepository: Repository<TagEntity>,
    ) {}

    /** 创建标签 */
    async create(createTagDto: CreateTagDto) {
        const { name } = createTagDto;

        const repoRes = await this.tagRepository.findOne({
            where: {
                name,
            },
        });

        if (repoRes) {
            throw new BadRequestException('已有相同的标签名');
        }

        const tag = new TagEntity();
        tag.name = name;
        await this.tagRepository.save(tag);
    }

    /** 根据 id 查找 */
    async findOneById(id: number) {
        const repoRes = await this.tagRepository.findOne({
            where: {
                isDel: false,
                id: id,
            },
        });

        if (!repoRes) {
            throw new BadRequestException('该标签不存在');
        }

        return repoRes;
    }

    /** 更新 */
    async update(id: number, updateTagDto: UpdateTagDto) {
        const repoRes = await this.findOneById(id);
        if (updateTagDto.name) {
            repoRes.name = updateTagDto.name;
        }
        await this.tagRepository.save(repoRes);
    }

    /** 删除 */
    async remove(id: number) {
        const repoRes = await this.findOneById(id);
        repoRes.isDel = true;
        await this.tagRepository.save(repoRes);
    }
}
