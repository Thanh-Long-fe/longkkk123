import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable, tap } from 'rxjs';
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const now = Date.now();  // Lấy thời gian bắt đầu
  
      return next.handle().pipe(
        tap(() => {
          const elapsed = Date.now() - now; // Tính thời gian chạy
          const request = context.switchToHttp().getRequest();
          const method = request.method;
          const url = request.url;
          console.log(`${method} ${url} - ${elapsed}ms`);
        }),
      );
    }
  }
  