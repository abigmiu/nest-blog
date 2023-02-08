import { ApiProperty } from '@nestjs/swagger';

export class WallpaperResponse {
    @ApiProperty({ description: 'url' })
    url: string;

    @ApiProperty({ description: '是否冻结' })
    freeze: boolean;

    @ApiProperty({ description: '备注' })
    remark: string;

    @ApiProperty({ description: '标签名' })
    tags: string[];
}

export class WallpaperPageResponse {}
