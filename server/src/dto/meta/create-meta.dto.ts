import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Length } from 'class-validator';
import { metaTypes } from 'src/constant/meta';
import { IMetaTypeValue } from 'src/types/meta.type';

const metaTypeValue = Object.values(metaTypes);

export class CreateMetaDto {
    @ApiProperty({ description: '名称' })
    @Length(1, 100, {
        message: 'name 字段长度为 1 到 100',
    })
    name: string;

    @ApiProperty({ description: '缩略名', required: false })
    @Length(1, 100, {
        message: 'slug 字段长度为1 到 100',
    })
    @IsOptional()
    slug?: string;

    @ApiProperty({ description: '类型', default: 'category' })
    @IsString({
        message: (arg) => {
            console.log(arg);
            if (!metaTypeValue.includes(arg.value)) {
                return 'type 字段不合法';
            }
        },
    })
    type: IMetaTypeValue;

    @ApiProperty({ description: '描述', required: false })
    @Length(1, 200, {
        message: 'description 字段的长度是 1 到 200字',
    })
    @IsOptional()
    description?: string;

    @ApiProperty({ description: '排序， 越大越往前', required: false })
    @IsInt()
    @IsOptional()
    order?: number;

    @ApiProperty({ description: '父级id', required: false })
    @IsInt()
    @IsOptional()
    parentId?: number;
}
