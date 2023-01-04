import { Controller, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { IdParam } from 'src/dto/param.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    create(@Body() createTagDto: CreateCategoryDto) {
        return this.categoryService.create(createTagDto);
    }

    @Put(':id')
    update(@Param() param: IdParam, @Body() updateTagDto: UpdateCategoryDto) {
        return this.categoryService.update(param.id, updateTagDto);
    }

    @Delete(':id')
    remove(@Param() param: IdParam) {
        return this.categoryService.remove(param.id);
    }
}
