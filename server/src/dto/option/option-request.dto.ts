import { ApiProperty } from '@nestjs/swagger';

/**
 * admin 设置网站选项
 */
export class AdminSetWebInfoDto {
    @ApiProperty({ description: '网站首页标题' })
    title: string;

    @ApiProperty({ description: '网站名称' })
    webName: string;
}

/**
 * Admin 添加网站选项
 */
export class AdminAddOptionDto {
    @ApiProperty({ description: '主键，key' })
    key: string;

    @ApiProperty({ description: '值' })
    value: string;

    @ApiProperty({ description: '名称' })
    name: string;
}
