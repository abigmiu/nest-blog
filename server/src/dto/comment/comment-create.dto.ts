import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsIP, IsOptional, IsString, IsUrl } from 'class-validator';

/** 创建内容评论 DTO */
export class CreateCommentDto {
    @ApiProperty({ description: '评论用户名称', default: '用户昵称' })
    author: string;

    @ApiProperty({ description: '评论用户 ID', required: false })
    @IsInt()
    @IsOptional()
    authorId: number;

    @ApiProperty({ description: '评论用户邮箱', default: 'aaaa@gmail.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: '评论用户网址', default: 'https://www.baidu.com' })
    @IsUrl()
    @IsOptional()
    url: string;

    @ApiProperty({ description: '评论 IP', default: '192.168.0.1' })
    @IsIP()
    @IsOptional()
    ip: string;

    @ApiProperty({ description: '评论 UA' })
    @IsString()
    @IsOptional()
    agent: string;

    @ApiProperty({ description: '评论内容', default: '评论内容' })
    @IsString()
    text: string;
}
