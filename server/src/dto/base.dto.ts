import { ApiProperty } from '@nestjs/swagger';

export class SharedEntityDto {
    @ApiProperty({ description: 'id' })
    id: number;

    @ApiProperty({ description: '创建时间' })
    createAt: Date;

    @ApiProperty({ description: '更新时间' })
    updateAt: Date;
}
