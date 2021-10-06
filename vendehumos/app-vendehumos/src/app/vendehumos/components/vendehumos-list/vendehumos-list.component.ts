import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vendehumos } from '../../classes/vendehumos';
import { VendehumosHttpClientService } from '../../services/vendehumos-http-client.service';

@Component({
  selector: 'app-vendehumos-list',
  templateUrl: './vendehumos-list.component.html',
  styleUrls: ['./vendehumos-list.component.css']
})
export class VendehumosListComponent implements OnInit {

  vendehumosList: Array<Vendehumos> = []

  constructor( 
    private vendehumosService : VendehumosHttpClientService
  ) { }

  ngOnInit(): void {
    this.vendehumosService.listVendehumos().subscribe((vendehumosList) => {
      this.vendehumosList = vendehumosList
    })
  }
}
