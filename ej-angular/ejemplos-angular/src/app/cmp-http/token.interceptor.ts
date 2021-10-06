import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const nuevaRequest = request.clone({
      headers: request.headers.append('Authorization','1234')
    })

    //interceptar response
    return next.handle(nuevaRequest)
      .pipe(
      map(resp => {
        console.log(resp)
        //aquí podríamos editar el objeto response
        return resp
      }));
  }
}
