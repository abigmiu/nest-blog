import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContentDto } from 'src/dto/content/create-content.dto';
import { ContentEntity } from 'src/entities/content/content.entity';
import { MetaEntity } from 'src/entities/metas/meta.entity';
import { Repository } from 'typeorm';
import { MetaService } from '../meta/meta.service';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(ContentEntity)
        private contentRepo: Repository<ContentEntity>,
        private metaService: MetaService,
    ) {}

    /** 创建内容 */
    async create(data: CreateContentDto) {
        const content = new ContentEntity();

        const metas: MetaEntity[] = [...data.categories];
        const tags = await this.metaService.createContentTags(data.tags);
        metas.push(...tags);

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
