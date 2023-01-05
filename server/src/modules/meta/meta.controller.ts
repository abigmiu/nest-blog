import { Body, Controller, Post } from '@nestjs/common';
import { CreateMetaDto } from 'src/dto/meta/create-meta.dto';
import { MetaService } from './meta.service';

@Controller('meta')
export class MetaController {
    constructor(private readonly metaService: MetaService) {}

    @Post()
    create(@Body() dto: CreateMetaDto) {
        console.log('create meta');
        console.log(dto);
    }
}
