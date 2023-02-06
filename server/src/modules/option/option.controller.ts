import { Body, Controller, Get, Post, Put } from '@nestjs/common';
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

    @ApiOperation({ summary: 'admin 获取可设置项' })
    @ApiResponse({ type: AdminAddOptionDto, isArray: true })
    @Get('setting')
    async getSetting() {
        return this.optionService.getOption(webInfoKeys);
    }

    @ApiOperation({ summary: 'admin 添加可设置项' })
    @ApiResponse({ type: AdminAddOptionDto })
    @Post('setting')
    async createSetting(@Body() body: AdminAddOptionDto) {
        return this.optionService.createSetting(body);
    }

    @ApiOperation({ summary: 'admin 更新网站信息' })
    @Put('setting')
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
}
