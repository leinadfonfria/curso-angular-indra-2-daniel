import { Component, Input, OnInit } from '@angular/core';
import { Vendehumos } from 'src/app/vendehumos/classes/vendehumos';
import { VendehumosHttpClientService } from 'src/app/vendehumos/services/vendehumos-http-client.service';

@Component({
  selector: 'app-vendehumos-list-elem',
  templateUrl: './vendehumos-list-elem.component.html',
  styleUrls: ['./vendehumos-list-elem.component.css']
})
export class VendehumosListElemComponent implements OnInit {

  @Input() vendehumos: Vendehumos = new Vendehumos(0,"Nombre vendehumos","avatar",['rrss'],['cat'],"descripcion",0,new Date(),0)

  constructor(
    private vendehumosService : VendehumosHttpClientService
  ) { }

  ngOnInit(): void {
  }

  votar() {
    this.vendehumosService.votar(this.vendehumos.id,++this.vendehumos.votos)
  }
}
