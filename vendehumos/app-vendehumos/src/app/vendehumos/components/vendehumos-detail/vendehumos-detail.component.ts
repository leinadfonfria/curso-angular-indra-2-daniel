import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendehumos } from '../../classes/vendehumos';
import { VendehumosHttpClientService } from '../../services/vendehumos-http-client.service';

@Component({
  selector: 'app-vendehumos-detail',
  templateUrl: './vendehumos-detail.component.html',
  styleUrls: ['./vendehumos-detail.component.css']
})
export class VendehumosDetailComponent implements OnInit {

  vendehumos: Vendehumos = new Vendehumos(0,"Nombre vendehumos","avatar",['rrss'],['cat'],"descripcion",0,new Date(),0)

  constructor(
    private activatedRoute: ActivatedRoute,
    private vendehumosService: VendehumosHttpClientService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.has('id')) {
        const id = parseInt(params.get('id')!)
        this.vendehumosService.getVendehumosById(id).subscribe((vendehumos:Vendehumos) => {
          this.vendehumos = vendehumos
        })
      }
    })
  }

}
