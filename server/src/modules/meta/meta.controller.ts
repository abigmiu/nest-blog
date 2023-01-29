import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMetaDto } from 'src/dto/meta/create-meta.dto';
import { QueryMetaDto } from 'src/dto/meta/query-meta.dto';
import { MetaService } from './meta.service';

@ApiTags('附加数据 /meta')
@Controller('meta')
export class MetaController {
    constructor(private readonly metaService: MetaService) {}

    @Post()
    @ApiOperation({ summary: '创建 meta' })
    private create(@Body() dto: CreateMetaDto) {
        return this.metaService.create(dto);
    }

    @Get()
    @ApiOperation({
        summary: '获取列表',
    })
    private getList(@Query() query: QueryMetaDto) {
        return this.metaService.findListForOne(query.type);
    }
}
