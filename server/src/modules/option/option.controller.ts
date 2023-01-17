import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { announcementKeys, webInfoKeys } from 'src/constant/option';
import { AdminAddOptionDto, AdminSetWebInfoDto } from 'src/dto/option/option-request.dto';
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

    @ApiOperation({ summary: 'admin 设置网站信息' })
    @Post('webInfo')
    async setWebInfo(@Body() data: AdminSetWebInfoDto) {
        return this.optionService.updateWebInfo(data);
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

    @ApiOperation({ summary: '更改网站公告' })
    @Post('announcement')
    async updateAnnouncement(@Body() data: string[]) {
        return this.optionService.createOrUpdateAnnouncement(data);
    }

    @ApiOperation({ summary: '创建网站选项' })
    @Post('create')
    async createOption(@Body() data: AdminAddOptionDto) {
        return this.optionService.createOption(data);
    }
}
