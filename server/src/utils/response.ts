import { ClassConstructor, plainToClass } from 'class-transformer';

export function createResponse<T, V>(cls: ClassConstructor<T>, plain: V) {
    return plainToClass(cls, plain, { excludeExtraneousValues: true });
}
