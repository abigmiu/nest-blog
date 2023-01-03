import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import config from 'src/config';

import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import modules from 'src/modules';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) =>
                configService.get<TypeOrmModuleOptions>('db'),
        }),
        ...modules,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
