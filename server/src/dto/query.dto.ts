import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

/** 分页查询 */
export default class PageDto {
    @ApiProperty({
        description: '页数',
        type: 'number',
        default: 1,
        required: false,
    })
    @IsInt({ message: 'page 只能为数字' })
    @Type(() => Number)
    page = 1;

    @ApiProperty({
        description: '每页数量',
        type: 'number',
        default: 10,
        required: false,
    })
    @IsInt({ message: 'size 只能为数字' })
    @Type(() => Number)
    size = 10;
}
