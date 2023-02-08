import { ApiProperty } from '@nestjs/swagger';
import {
    IsArray,
    IsBoolean,
    IsInt,
    IsOptional,
    IsString,
    IsUrl,
    Length,
    Min,
} from 'class-validator';
import { MetaEntity } from 'src/entities/metas/meta.entity';

export class CreateContentDto {
    @ApiProperty({ description: '标题' })
    @Length(1, 200, {
        message: 'title 字段为1 到 200字',
    })
    @IsOptional()
    title?: string;

    @ApiProperty({ description: '缩写' })
    @Length(1, 200, {
        message: 'slug 字段为1 到 200字',
    })
    @IsOptional()
    slug?: string;

    @ApiProperty({ description: '文章内容， markdown 格式' })
    @IsString()
    text: string;

    @ApiProperty({ description: '权重' })
    @IsInt()
    @Min(0)
    @IsOptional()
    order?: number;

    @ApiProperty({ description: '类型' })
    @IsString()
    @IsOptional()
    type?: string;

    @ApiProperty({ description: '状态' })
    @IsString()
    @IsOptional()
    status?: string;

    @ApiProperty({ description: '密码' })
    @IsString()
    @IsOptional()
    password?: string;

    @ApiProperty({ description: '是否允许评论' })
    @IsBoolean()
    @IsOptional()
    allowComment?: boolean;

    @ApiProperty({ description: '分类' })
    @IsArray()
    categories: MetaEntity[];

    @ApiProperty({ description: '标签' })
    @IsArray()
    tags: string[];
}

/** 创建壁纸 */
export class CreateWallpaperDto {
    @ApiProperty({ description: 'url' })
    @IsUrl()
    url: string;

    @ApiProperty({ description: '备注' })
    @IsOptional()
    remark: string;

    @ApiProperty({ description: '标签名', isArray: true, type: 'string' })
    tags: string[];
}
