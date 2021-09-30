import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anakin',
  templateUrl: './anakin.component.html',
  styleUrls: ['./anakin.component.css']
})
export class AnakinComponent implements OnInit {

  nombreLuke = 'Luke Skywalker'
  nombreLeia = 'Leia Ordana'

  constructor() {
    this.cambiaNombreLuke2 = this.cambiaNombreLuke2.bind(this)
    this.cambiaNombreLuke = this.cambiaNombreLuke.bind(this)
  }

  ngOnInit(): void {
  }

  cambiaNombreLeia(nuevoNombre: any) {//el mismo tipo que lo que envía el evento nombreCambiado
    this.nombreLeia = nuevoNombre
  }

  cambiaNombreLuke(): any {
    return (nuevoNombre: any) => this.nombreLuke = nuevoNombre
  }

  cambiaNombreLuke2(): any {
    return () => this.nombreLuke = 'Luc'
  }
}
