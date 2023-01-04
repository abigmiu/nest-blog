import { Controller, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { IdParam } from 'src/dto/param.dto';

@Controller('tag')
export class TagController {
    constructor(private readonly tagService: TagService) {}

    @Post()
    create(@Body() createTagDto: CreateTagDto) {
        return this.tagService.create(createTagDto);
    }

    @Put(':id')
    update(@Param() param: IdParam, @Body() updateTagDto: UpdateTagDto) {
        return this.tagService.update(param.id, updateTagDto);
    }

    @Delete(':id')
    remove(@Param() param: IdParam) {
        return this.tagService.remove(param.id);
    }
}
