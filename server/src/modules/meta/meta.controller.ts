import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMetaDto } from 'src/dto/meta/create-meta.dto';
import { MetaService } from './meta.service';

@ApiTags('附加数据 /meta')
@Controller('meta')
export class MetaController {
    constructor(private readonly metaService: MetaService) {}

    @Post()
    private create(@Body() dto: CreateMetaDto) {
        return this.metaService.create(dto);
    }
}
