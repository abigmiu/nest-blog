import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContentDto } from 'src/dto/content/create-content.dto';
import { ContentEntity } from 'src/entities/content/content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(ContentEntity)
        private contentRepo: Repository<ContentEntity>,
    ) {}

    async create(data: CreateContentDto) {
        const content = new ContentEntity();

        content.title = data.title;
        content.text = data.text;
        content.allowComment = data.allowComment;
        content.order = data.order;
        content.slug = data.slug;
        content.status = data.status;
        content.password = data.password;
        content.type = data.type;

        await this.contentRepo.save(content);
    }
}
