import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateContentDto } from 'src/dto/content/create-content.dto';
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
}
