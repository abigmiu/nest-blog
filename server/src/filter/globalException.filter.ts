import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        let message;
        console.error(exception);
        try {
            message = exception.message;
        } catch {
            message = '服务器错误';
        }
        response.status(200).json({
            code: 500,
            data: null,
            msg: message,
        });
    }
}
