import { ApiProperty } from '@nestjs/swagger';
import { OptionEntity } from 'src/entities/option/option.entity';
import { IWebInfoResponse } from 'src/types/option.type';

/** 网站信息接口 Response */
export class WebInfoResponse {
    constructor(data: Array<OptionEntity>) {
        const res: Partial<IWebInfoResponse> = {};
        data.forEach((item) => {
            res[item.key] = item.value;
        });
        return res as IWebInfoResponse;
    }

    @ApiProperty({
        description: '网站标题/签名',
    })
    title: string;

    @ApiProperty({
        description: '网站名',
    })
    webName: string;
}

/** 网站公告接口 Response */
export class WebAnnouncementResponse {
    constructor(data: Array<OptionEntity>) {
        if (data[0]) {
            return JSON.parse(data[0].value) as string[];
        }
        return [];
    }
}
