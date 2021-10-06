import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTareas(): Observable<Object> {
    return this.httpClient
      .get(environment.BASE_URL_API_TAREAS + '/tareas',
        {
          // headers: {
          //   'Authorization': '1234'
          // }
        })
  }

  guardarTarea(tarea: any): Observable<Object> {
    return this.httpClient
      .post(environment.BASE_URL_API_TAREAS +'/tareas',
      tarea,
        {
          // headers: {
          //   'Authorization': '1234'
          // }
        }
      )
  }

  completarTarea(tareaId: number, completada: boolean) {
    return this.httpClient.patch(environment.BASE_URL_API_TAREAS +'/tareas/'+ tareaId,
    {completada},//== completada: completada
    {
      // headers: {
      //   'Authorization': '1234'
      // }
    })
  }

  eliminarTarea(tareaId: number) {
    return this.httpClient.delete(environment.BASE_URL_API_TAREAS +'/tareas/'+ tareaId,
      {
        // headers: {
        //   'Authorization': '1234'
        // },
        observe: 'response'
      }
      
    )
  }
}
