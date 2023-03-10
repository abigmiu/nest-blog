import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WallpaperResponse } from 'src/dto/content/content-response.dto';
import { CreateContentDto, CreateWallpaperDto } from 'src/dto/content/create-content.dto';
import { QueryContentPageDto, QueryWallpaperPageDto } from 'src/dto/content/query-content.dto';
import { IdParam } from 'src/dto/param.dto';
import { ContentService } from './content.service';

@ApiTags('内容')
@Controller('content')
export class ContentController {
    constructor(private readonly contentService: ContentService) {}

    @ApiOperation({ summary: '创建文章' })
    @Post()
    createContent(@Body() data: CreateContentDto) {
        return this.contentService.create(data);
    }

    @ApiOperation({ summary: '更新文章' })
    @Put(':id')
    updateContent(@Param() param: IdParam, @Body() data: CreateContentDto) {
        return this.contentService.update(param.id, data);
    }

    @ApiOperation({ summary: '获取文章分页' })
    @Get('page')
    getArticlePage(@Query() query: QueryContentPageDto) {
        return this.contentService.getArticlePage(query);
    }

    @ApiOperation({ summary: '获取文章详情' })
    @Get(':id')
    getArticleDetail(@Param() param: IdParam) {
        return this.contentService.getArticleDetail(param.id);
    }

    @ApiOperation({ summary: '删除文章' })
    @Delete(':id')
    deleteArticle(@Param() param: IdParam) {
        return this.contentService.deleteArticle(param.id);
    }

    @ApiOperation({ summary: '获取壁纸分页' })
    @ApiResponse({ type: [WallpaperResponse] })
    @Get('wallpaper/page')
    getWallpaperPage(@Query() query: QueryWallpaperPageDto) {
        return this.contentService.getWallpaperList(query);
    }

    @ApiOperation({ summary: '创建壁纸' })
    @Post('wallpaper')
    createWallpaper(@Body() body: CreateWallpaperDto) {
        return this.contentService.createWallpaper(body);
    }

    @ApiOperation({ summary: '冻结/解冻壁纸' })
    @Put('wallpaper/freeze/:id')
    toggleWallpaperFreeze(@Param() param: IdParam) {
        return this.contentService.toggleWallpaperFreeze(param.id);
    }
}
