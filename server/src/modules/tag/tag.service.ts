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

    findAll() {
        return 'his action returns all tag';
    }

    findOne(id: number) {
        return `This action returns a #${id} tag`;
    }

    update(id: number, updateTagDto: UpdateTagDto) {
        return `This action updates a #${id} tag`;
    }

    remove(id: number) {
        return `This action removes a #${id} tag`;
    }
}
