import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  unTexto: string = 'Un texto'
  precio: number = 1234
  fecha: Date = new Date()

  persona = {
    nombre: 'Charly',
    apellido: 'Falco',
    email: 'falco@email.com'
  }

  personaje = {}

  personajePromise: Promise<JSON>

  constructor() { }

  ngOnInit(): void {

    /* No recomendable usar fetch en Angular. Usar observables */
    fetch('https://swapi.dev/api//people/1')
      .then( response => response.json())
      .then( json => this.personaje = json)

    this.personajePromise = fetch('https://swapi.dev/api//people/2')
      .then( response => response.json())
  }

  mensaje = new Promise<string>((resolve, reject) => {
    
    setTimeout(() => resolve('El canario está en la jaula'),500)
  })

}
