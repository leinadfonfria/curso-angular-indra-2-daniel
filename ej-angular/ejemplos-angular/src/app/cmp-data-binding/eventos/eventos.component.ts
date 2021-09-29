import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fun(ev: any): void {
    ev.preventDefault() //cancela el evento
  }

  muestraLaCaja(caja: string, event: any) {
    console.log(event); //en la propiedad path encontramos el "camino hacia arriba" del evento
    event.stopPropagation();
    alert('has pulsado la caja ' + caja)
  }

}
