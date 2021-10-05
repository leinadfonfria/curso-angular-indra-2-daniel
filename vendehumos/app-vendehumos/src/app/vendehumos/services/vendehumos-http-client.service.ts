import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vendehumos } from '../classes/vendehumos';

@Injectable({
  providedIn: 'root'
})
export class VendehumosHttpClientService {

  constructor() { }

  listVendehumos(): Array<Vendehumos> {
    
  }
}
