/*
https://docs.nestjs.com/interceptors#interceptors
*/
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const host = context.switchToHttp();
        const request = host.getRequest<Request>();
        console.log(`${request.method} ${request.url}`);
        return next.handle();
    }
}
