import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FieldEntity } from 'src/entities/filed/field.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FieldService {
    constructor(
        @InjectRepository(FieldEntity)
        private fieldRepo: Repository<FieldEntity>,
    ) {}
}
