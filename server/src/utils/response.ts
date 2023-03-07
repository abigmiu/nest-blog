import { ClassConstructor, plainToClass } from 'class-transformer';

export function createResponse<T, V>(cls: ClassConstructor<T>, plain: V) {
    return plainToClass(cls, plain, { excludeExtraneousValues: true });
}

/** 分页数据 */
export function createPageData<T>(content: T[], total: number) {
    return {
        content,
        total,
    };
}
