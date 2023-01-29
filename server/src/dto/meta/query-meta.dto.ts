import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { metaTypes } from 'src/constant/meta';
import type { IMetaTypeValue } from 'src/types/meta.type';

const metaTypeValue = Object.values(metaTypes);

export class QueryMetaDto {
    @ApiProperty({ description: '类型' })
    @IsString({
        message: (arg) => {
            console.log(arg);
            if (!metaTypeValue.includes(arg.value)) {
                return 'type 字段不合法';
            }
        },
    })
    type: IMetaTypeValue;
}
