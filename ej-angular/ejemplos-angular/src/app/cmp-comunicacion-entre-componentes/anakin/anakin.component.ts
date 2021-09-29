import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anakin',
  templateUrl: './anakin.component.html',
  styleUrls: ['./anakin.component.css']
})
export class AnakinComponent implements OnInit {

  nombreLuke = 'Luke Skywalker'
  nombreLeia = 'Leia Ordana'

  constructor() { }

  ngOnInit(): void {
  }

  cambiaNombreLeia(nuevoNombre: any) {//el mismo tipo que lo que envía el evento nombreCambiado
    this.nombreLeia = nuevoNombre
  }

  cambiaNombreLuke(nuevoNombre: any) {//el mismo tipo que lo que envía el evento nombreCambiado
    this.nombreLuke = nuevoNombre
  }
}
