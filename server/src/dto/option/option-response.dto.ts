import { OptionEntity } from 'src/entities/option/option.entity';
import { IWebInfoKey } from 'src/types/option.type';

export class WebInfoResponse {
    constructor(data: Array<OptionEntity>) {
        const res: Partial<Record<IWebInfoKey, any>> = {};
        data.forEach((item) => {
            res[item.key] = item.value;
        });
        return res;
    }
}
