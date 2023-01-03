import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entities/category/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRepo: Repository<CategoryEntity>,
    ) {}

    /** 创建标签 */
    async create(createTagDto: CreateCategoryDto) {
        const { name } = createTagDto;

        const repoRes = await this.categoryRepo.findOne({
            where: {
                name,
            },
        });

        if (repoRes) {
            throw new BadRequestException('已有相同的标签名');
        }

        const tag = new CategoryEntity();
        tag.name = name;
        await this.categoryRepo.save(tag);
    }

    /** 根据 id 查找 */
    async findOneById(id: number) {
        const repoRes = await this.categoryRepo.findOne({
            where: {
                isDel: false,
                id: id,
            },
        });

        if (!repoRes) {
            throw new BadRequestException('该标签不存在');
        }

        return repoRes;
    }

    /** 更新 */
    async update(id: number, updateTagDto: UpdateCategoryDto) {
        const repoRes = await this.findOneById(id);
        if (updateTagDto.name) {
            repoRes.name = updateTagDto.name;
        }
        await this.categoryRepo.save(repoRes);
    }

    /** 删除 */
    async remove(id: number) {
        const repoRes = await this.findOneById(id);
        repoRes.isDel = true;
        await this.categoryRepo.save(repoRes);
    }
}
