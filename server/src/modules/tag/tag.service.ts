import { Injectable } from '@nestjs/common';
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

    create(createTagDto: CreateTagDto) {
        return 'This action adds a new tag';
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
