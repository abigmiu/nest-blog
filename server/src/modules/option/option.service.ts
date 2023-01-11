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

    async getOption(keys: ReadonlyArray<string>) {
        const res = await this.optionRepo.find({
            where: {
                key: In(keys),
            },
        });

        return res;
    }
}
