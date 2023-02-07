import {
    CallHandler,
    ExecutionContext,
    HttpStatus,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest<Request>();
        const response = context.switchToHttp().getResponse<Response>();
        if (request.method.toUpperCase() === 'POST' && response.statusCode === HttpStatus.CREATED) {
            response.status(HttpStatus.OK);
        }
        if (request.method.toUpperCase() === 'GET' && response.statusCode == HttpStatus.OK) {
            response.status(HttpStatus.OK);
        }

        return next.handle().pipe(
            map((data) => {
                const ret = {
                    code: HttpStatus.OK,
                    data: data || null,
                    msg: 'ok',
                };
                console.log(ret);
                return ret;
            }),
        );
    }
}
