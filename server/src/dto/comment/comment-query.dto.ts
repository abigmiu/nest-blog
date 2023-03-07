import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
import PageDto from '../query.dto';

export class QueryCommentDto extends PageDto {
    @ApiProperty({ description: '文章 Id', required: false })
    @IsInt()
    @Type(() => Number)
    @IsOptional()
    contentId?: number;
}
