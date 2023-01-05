import { IsBoolean, IsInt, IsOptional, IsString, Length, Min } from 'class-validator';

export class CreateContentDto {
    @Length(1, 200, {
        message: 'title 字段为1 到 200字',
    })
    @IsOptional()
    title?: string;

    @Length(1, 200, {
        message: 'slug 字段为1 到 200字',
    })
    @IsOptional()
    slug?: string;

    @IsString()
    text: string;

    @IsInt()
    @Min(0)
    @IsOptional()
    order?: number;

    @IsString()
    @IsOptional()
    type?: string;

    @IsString()
    @IsOptional()
    status?: string;

    @IsString()
    @IsOptional()
    password?: string;

    @IsBoolean()
    @IsOptional()
    allowComment?: boolean;
}
