import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class IdParam {
    @Type(() => Number)
    @IsInt({
        message: 'id只能为整数',
    })
    id: number;
}
