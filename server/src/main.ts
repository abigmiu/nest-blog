import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: ['error', 'debug'],
    });

    const config = app.get(ConfigService);

    app.enableCors({
        credentials: true,
    });
    const port = config.get<number>('port');
    await app.listen(port, () => {
        console.log(`server listen in ${port}`);
    });
}
bootstrap();
