import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendehumos } from '../classes/vendehumos';

@Injectable({
  providedIn: 'root'
})
export class VendehumosHttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  listVendehumos(): Observable<Array<Vendehumos>> {
    return this.httpClient.get<Array<Vendehumos>>(environment.VENDEHUMOS_HTTP_CLIENT_BASE_URL)
  }

  getVendehumosById(id: number): Observable<Vendehumos> {
    return this.httpClient.get<Vendehumos>(environment.VENDEHUMOS_HTTP_CLIENT_BASE_URL+'/'+id)
  }

  votar(vendehumosId: number, votos: number): void {
    console.log(environment.VENDEHUMOS_HTTP_CLIENT_BASE_URL + '/' + vendehumosId)
    console.log(votos)
    this.httpClient.patch(environment.VENDEHUMOS_HTTP_CLIENT_BASE_URL + '/' + vendehumosId,
      {votos},//{votos: votos}
    )
  }
}
