import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { announcementKeys, webInfoKeys } from 'src/constant/option';
import { WebAnnouncementResponse, WebInfoResponse } from 'src/dto/option/option-response.dto';
import { OptionService } from './option.service';

@ApiTags('选项 /option')
@Controller('option')
export class OptionController {
    constructor(private readonly optionService: OptionService) {}

    @ApiOperation({
        summary: '获取网站信息',
    })
    @ApiResponse({
        type: WebInfoResponse,
    })
    @Get('webInfo')
    async getWebInfo() {
        const res = await this.optionService.getOption(webInfoKeys);
        return new WebInfoResponse(res);
    }

    @ApiOperation({
        summary: '获取网站公告',
    })
    @ApiResponse({
        type: String,
        isArray: true,
    })
    @Get('announcement')
    async getAnnouncement() {
        const res = await this.optionService.getOption(announcementKeys);
        return new WebAnnouncementResponse(res);
    }
}
