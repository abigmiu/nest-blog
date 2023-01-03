import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

import * as chalk from 'chalk';
import { ValidationPipe } from './pipe/validate.pipe';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { GlobalExceptionFilter } from './filter/globalException.filter';
import { HttpExceptionFilter } from './filter/httpException.filter';
import { ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: ['error', 'debug'],
    });

    const config = app.get(ConfigService);

    app.enableCors({
        credentials: true,
    });

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalFilters(new GlobalExceptionFilter(), new HttpExceptionFilter());
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

    const globalPrefix = config.get<string>('globalPrefix');
    app.setGlobalPrefix(globalPrefix);

    const port = config.get<number>('port');
    await app.listen(port, 'localhost', async () => {
        const url = await app.getUrl();
        console.log(`server listen in ${chalk.yellow(`${url}${globalPrefix}`)}`);
    });
}
bootstrap();
