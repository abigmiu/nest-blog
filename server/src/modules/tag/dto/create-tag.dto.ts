import { Length } from 'class-validator';

export class CreateTagDto {
    @Length(1, 10, {
        message: '长度为1-10个字',
    })
    name: string;
}
