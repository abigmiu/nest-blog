import { IsInt, IsOptional, IsString, Length } from 'class-validator';
import { metaTypes } from 'src/constant/meta';
import { IMetaTypeValue } from 'src/types/meta.type';

const metaTypeValue = Object.values(metaTypes);

export class CreateMetaDto {
    @Length(1, 100, {
        message: 'name 字段长度为 1 到 100',
    })
    name: string;

    @Length(1, 100, {
        message: 'slug 字段长度为1 到 100',
    })
    @IsOptional()
    slug?: string;

    @IsString({
        message: (arg) => {
            if (!metaTypeValue.includes(arg.value)) {
                return 'type 字段不合法';
            }
        },
    })
    type: IMetaTypeValue;

    @Length(1, 200, {
        message: 'description 字段的长度是 1 到 200字',
    })
    @IsOptional()
    description?: string;

    @IsInt()
    @IsOptional()
    order?: number;

    @IsInt()
    @IsOptional()
    parent?: number;
}
