import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminAddOptionDto, AdminSetWebInfoDto } from 'src/dto/option/option-request.dto';
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

    /** 更新网站信息 */
    async updateWebInfo(data: AdminSetWebInfoDto) {
        const stack = [];
        Object.keys(data).forEach(async (keyName) => {
            const optionObj = await this.optionRepo.findOne({
                where: {
                    key: keyName,
                },
            });
            console.log(optionObj);
            if (optionObj) {
                optionObj.key = keyName;
                optionObj.value = data[keyName];
                const p = this.optionRepo.save(optionObj);
                stack.push(p);
            }
        });
        await Promise.all(stack);
    }

    /** 创建网站选项 */
    async createOption(data: AdminAddOptionDto) {
        const optionObj = new OptionEntity();
        optionObj.key = data.key;
        optionObj.name = data.name;
        optionObj.value = data.value;
        await this.optionRepo.save(optionObj);
    }
}
