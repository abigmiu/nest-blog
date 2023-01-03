import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

import * as chalk from 'chalk';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: ['error', 'debug'],
    });

    const config = app.get(ConfigService);

    app.enableCors({
        credentials: true,
    });

    const globalPrefix = config.get<string>('globalPrefix');
    app.setGlobalPrefix(globalPrefix);

    const port = config.get<number>('port');
    await app.listen(port, 'localhost', async () => {
        const url = await app.getUrl();
        console.log(`server listen in ${chalk.yellow(`${url}${globalPrefix}`)}`);
    });
}
bootstrap();
