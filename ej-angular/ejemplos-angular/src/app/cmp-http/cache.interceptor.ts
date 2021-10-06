import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log('URL!!!!!' + request.url)
    console.log(request.method)

    if (request.method === 'GET') {
      //Comprobamos si en la caché (localStorage) están los datos de la petición que se ha realizado
      const datos = localStorage.getItem(request.url)
      if (!datos) {
        //Si no hay datos, hacemos la petición a la API y guardamos en la caché los datos que recibimos de la API
        return next.handle(request).pipe(
          map((resp: any) => {
            console.log({ resp })
            localStorage.setItem(request.url, JSON.stringify(resp.body))
            //almacenamos las tareas en el localStorage.
            //luego, si hay datos en el localStorage, los recuperamos de ahí,
            //en lugar de hacer de nuevo una petición
            return resp
          })
        )
      } else {
        //Si los datos ya están guardados, los obtenemos de la caché y devolvemos una respuesta. No se realiza la petición
        //El método intercept retorna un observable que contendrá la response
        console.log("recuperando datos de la caché")
        return new Observable((observer) => {
          observer.next(new HttpResponse({
            body: JSON.parse(datos)
          }))
        });
      }
    }
    //si no es un GET, se continúa normalmente con la petición
    return next.handle(request);
  }
}
