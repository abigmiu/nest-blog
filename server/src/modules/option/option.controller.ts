import { Controller, Get } from '@nestjs/common';
import { webInfoKeys } from 'src/constant/option';
import { WebInfoResponse } from 'src/dto/option/option-response.dto';
import { OptionService } from './option.service';

@Controller('option')
export class OptionController {
    constructor(private readonly optionService: OptionService) {}

    @Get('webInfo')
    async getWebInfo() {
        const res = await this.optionService.getOption(webInfoKeys);
        return new WebInfoResponse(res);
    }
}
