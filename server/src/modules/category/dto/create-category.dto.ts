import { Length } from 'class-validator';

export class CreateCategoryDto {
    @Length(1, 10, {
        message: '长度为1-10个字',
    })
    name: string;
}
