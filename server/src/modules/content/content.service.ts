import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { metaTypes } from 'src/constant/meta';
import { ArticleDetailResponse, ArticleItemResponse } from 'src/dto/content/content-response.dto';
import { CreateContentDto, CreateWallpaperDto } from 'src/dto/content/create-content.dto';
import { QueryContentPageDto, QueryWallpaperPageDto } from 'src/dto/content/query-content.dto';
import { ContentEntity } from 'src/entities/content/content.entity';
import { MetaEntity } from 'src/entities/metas/meta.entity';
import { WallpaperEntity } from 'src/entities/wallpaper/wallpaper.entity';
import { getRound } from 'src/utils/number';
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

        const categories: MetaEntity[] = data.categories.map((id) => {
            const meta = new MetaEntity();
            meta.id = id;
            meta.type = metaTypes.category;
            return meta;
        });
        const tags: MetaEntity[] = data.tags.map((id) => {
            const meta = new MetaEntity();
            meta.id = id;
            meta.type = metaTypes.tag;
            return meta;
        });

        content.metas = [...categories, ...tags];

        content.title = data.title;
        content.text = data.text;
        content.allowComment = data.allowComment;
        content.summary = data.summary || data.text.slice(150);
        content.order = data.order;
        content.slug = data.slug;
        content.status = data.status;
        content.password = data.password;
        content.type = data.type;
        console.log(content);
        await this.contentRepo.save(content);
    }

    /** 更新内容 */
    async update(id: number, data: CreateContentDto) {
        const content = new ContentEntity();
        content.id = id;
        content.text = data.text;
        await this.contentRepo.save(content);
    }

    /** 获取文章分页 */
    async getArticlePage(query: QueryContentPageDto) {
        const res = await this.contentRepo.find({
            where: {
                isDel: false,
            },
            order: {
                id: 'DESC',
            },
            take: query.size,
            skip: (query.page - 1) * query.size,
            relations: ['metas'],
        });

        for (let i = 0; i < res.length; i++) {
            const item = res[i];
            item.cover = item.cover || (await this.getRoundWallpaper());
        }
        const response = res.map((item) => createResponse(ArticleItemResponse, item));
        response.forEach((item, index) => {
            const metas = res[index].metas;
            item.categories = metas.filter((meta) => meta.type === metaTypes.category);
            item.tags = metas.filter((meta) => meta.type === metaTypes.tag);
        });

        return response;
    }

    /** 创建壁纸 */
    async createWallpaper(data: CreateWallpaperDto) {
        const wallpaper = new WallpaperEntity();
        wallpaper.remark = data.remark;
        wallpaper.tags = data.tags;
        wallpaper.url = data.url;

        await this.wallpaperRepo.save(wallpaper);
    }

    /** 获取随机壁纸 */
    async getRoundWallpaper() {
        const list = await this.wallpaperRepo.find({
            where: {
                isDel: false,
            },
        });

        const ids = list.map((wallpaper) => wallpaper.id);

        const roundNum = getRound(0, ids.length - 1);
        return list[roundNum].url;
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
            order: {
                id: 'DESC',
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
            relations: ['metas'],
        });
        res.cover = await this.getRoundWallpaper();
        const response = createResponse(ArticleDetailResponse, res);
        response.categories = res.metas.filter((meta) => meta.type === metaTypes.category);
        response.tags = res.metas.filter((meta) => meta.type === metaTypes.tag);

        return response;
    }

    /** 删除文章 */
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
