import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionEntity } from 'src/entities/option/option.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class OptionService {
    constructor(
        @InjectRepository(OptionEntity)
        private optionRepo: Repository<OptionEntity>,
    ) {}

    /** 获取多个 option */
    async getOption(keys: ReadonlyArray<string>) {
        const res = await this.optionRepo.find({
            where: {
                key: In(keys),
            },
        });

        return res;
    }

    /** 创建或者更新 网站公告 */
    async createOrUpdateAnnouncement(data: string[]) {
        const keyName = 'announcement';
        const optionObj = new OptionEntity();
        optionObj.key = keyName;
        optionObj.name = '网站公告';
        optionObj.value = JSON.stringify(data);
        await this.optionRepo.save(optionObj);
    }
}
