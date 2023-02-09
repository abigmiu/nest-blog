import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleDetailResponse, ArticleItemResponse } from 'src/dto/content/content-response.dto';
import { CreateContentDto, CreateWallpaperDto } from 'src/dto/content/create-content.dto';
import { QueryContentPageDto, QueryWallpaperPageDto } from 'src/dto/content/query-content.dto';
import { ContentEntity } from 'src/entities/content/content.entity';
import { MetaEntity } from 'src/entities/metas/meta.entity';
import { WallpaperEntity } from 'src/entities/wallpaper/wallpaper.entity';
import { createResponse } from 'src/utils/response';
import { Repository } from 'typeorm';
import { MetaService } from '../meta/meta.service';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(ContentEntity)
        private contentRepo: Repository<ContentEntity>,
        @InjectRepository(WallpaperEntity)
        private wallpaperRepo: Repository<WallpaperEntity>,
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
        content.summary = data.summary || data.text.slice(200);
        content.order = data.order;
        content.slug = data.slug;
        content.status = data.status;
        content.password = data.password;
        content.type = data.type;

        await this.contentRepo.save(content);
    }

    /** 获取文章分页 */
    async getArticlePage(query: QueryContentPageDto) {
        const res = await this.contentRepo.find({
            where: {
                isDel: false,
            },
            take: query.size,
            skip: (query.page - 1) * query.size,
        });

        return res.map((item) => createResponse(ArticleItemResponse, item));
    }

    /** 创建壁纸 */
    async createWallpaper(data: CreateWallpaperDto) {
        const wallpaper = new WallpaperEntity();
        wallpaper.remark = data.remark;
        wallpaper.tags = data.tags;
        wallpaper.url = data.url;

        await this.wallpaperRepo.save(wallpaper);
    }

    /** 切换冻结状态 */
    async toggleWallpaperFreeze(id: number) {
        const wallpaper = await this.wallpaperRepo.findOne({
            where: {
                id,
            },
        });
        wallpaper.freeze = !wallpaper.freeze;
        await this.wallpaperRepo.save(wallpaper);
    }

    /** 获取壁纸分页 */
    async getWallpaperList(query: QueryWallpaperPageDto) {
        const res = await this.wallpaperRepo.find({
            where: {
                isDel: false,
            },
            take: query.size,
            skip: (query.page - 1) * query.size,
        });

        return res;
    }

    /** 获取文章详情 */
    async getArticleDetail(id: number) {
        const res = await this.contentRepo.findOne({
            where: {
                isDel: false,
                id,
            },
        });

        return createResponse(ArticleDetailResponse, res);
    }

    async deleteArticle(id: number) {
        const res = await this.contentRepo.findOne({
            where: {
                isDel: false,
                id,
            },
        });

        res.isDel = true;

        await this.contentRepo.save(res);
    }
}
