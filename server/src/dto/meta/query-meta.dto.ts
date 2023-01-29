import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { metaTypes } from 'src/constant/meta';
import type { IMetaTypeValue } from 'src/types/meta.type';

const metaTypeValue = Object.values(metaTypes);

export class QueryMetaDto {
    @ApiProperty({ description: '类型' })
    @IsString({
        message: ({ value }) => {
            console.log(value);
            console.log(metaTypeValue);
            if (!metaTypeValue.includes(value.type)) {
                return 'type 字段不合法';
            }
        },
    })
    type: IMetaTypeValue;
}
