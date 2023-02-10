import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ArticleItemResponse {
    @ApiProperty({ description: 'id' })
    @Expose()
    id: number;

    @ApiProperty({ description: '创建时间' })
    @Expose()
    createAt: Date;

    @ApiProperty({ description: '更新时间' })
    @Expose()
    updateAt: Date;

    @ApiProperty({ description: '标题' })
    @Expose()
    title: string;

    @ApiProperty({ description: '封面图' })
    @Expose()
    cover: string;

    @ApiProperty({ description: '摘要' })
    @Expose()
    summary: string;

    @ApiProperty({ description: '缩写' })
    @Expose()
    slug: string;

    @ApiProperty({ description: '排序' })
    @Expose()
    order: number;

    @ApiProperty({ description: '类型' })
    @Expose()
    type: string;

    @ApiProperty({ description: '状态' })
    @Expose()
    status: string;

    @ApiProperty({ description: '评论数' })
    @Expose()
    commentsNum: number;

    @ApiProperty({ description: '允许评论' })
    @Expose()
    allowComment: boolean;
}

export class ArticleDetailResponse extends ArticleItemResponse {
    @Expose()
    @ApiProperty({ description: '文章内容' })
    text: string;
}

export class WallpaperResponse {
    @ApiProperty({ description: 'url' })
    url: string;

    @ApiProperty({ description: '是否冻结' })
    freeze: boolean;

    @ApiProperty({ description: '备注' })
    remark: string;

    @ApiProperty({ description: '标签名' })
    tags: string[];
}

export class WallpaperPageResponse {}
