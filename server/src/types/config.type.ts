import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IAppConfig {
    port?: number;
    globalPrefix?: string;
    db: TypeOrmModuleOptions;
}
