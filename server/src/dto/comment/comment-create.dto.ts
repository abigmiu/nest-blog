import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsIP, IsOptional, IsString, IsUrl } from 'class-validator';

/** 创建内容评论 DTO */
export class CreateCommentDto {
    @ApiProperty({ description: '评论用户名称' })
    author: string;

    @ApiProperty({ description: '评论用户 ID', required: false })
    @IsInt()
    @IsOptional()
    authorId: number;

    @ApiProperty({ description: '评论用户邮箱' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: '评论用户网址' })
    @IsUrl()
    @IsOptional()
    url: string;

    @ApiProperty({ description: '评论 IP' })
    @IsIP()
    @IsOptional()
    ip: string;

    @ApiProperty({ description: '评论 UA' })
    @IsString()
    @IsOptional()
    agent: string;

    @ApiProperty({ description: '评论内容' })
    @IsString()
    text: string;
}
