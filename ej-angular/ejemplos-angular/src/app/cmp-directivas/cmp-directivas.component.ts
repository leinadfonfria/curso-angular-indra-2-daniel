import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  colorLetra = 'orange'
  fondoPintado: boolean = true
  darkMode=false

  filterColor = ''

  animales = ['perro','gato','canario','tortuga']

  animales2 = [
    {id:1, tipo: 'perro'},
    {id:3, tipo: 'canario'},
    {id:4, tipo: 'tortuga'},
    {id:2, tipo: 'gato'},    
  ]

  animales3 = [
    {id:1, tipo: 'perro'},
    {id:3, tipo: 'canario'},
    {id:4, tipo: 'tortuga'},
    {id:2, tipo: 'gato'},    
  ]

  colores=['orange','blue','red']

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.animales3 = [
        {id:1, tipo: 'gato'},
        {id:3, tipo: 'canario'},
        {id:4, tipo: 'tortuga'},
        {id:2, tipo: 'perro'},    
      ]
    }, 5000)
  }

  getStyles() {
    return {textDecoration: 'underline', color: this.colorLetra}
  }

  getClases() {
    return {letraRoja: true, fondoAmarillo: this.fondoPintado}
  }

  toggleFondo() {
    this.fondoPintado = !this.fondoPintado
  }

  activaLightMode() {
    this.darkMode=false
  }

  activaDarkMode() {
    this.darkMode=true
  }

  trackByAnimales(index: number, animal: string) {
    console.log(index + animal)
    return index //el índice es único y el animal puede no serlo
  }
  trackByAnimales2(animal: any) {
    return animal.id
  }

  trackById(index: number, animal: any): number {
    //evita repintar toda la lista
    //si cambia alguno de los elementos
    //de la lista
    return animal.id
  }

  addColores(event: any) {
    this.colores = [ ... this.colores, event.target.value]
    /*
    De este modo estamos clonando el array de colores y añadiendo el nuevo valor al final
    Así, el pipe ya reconoce que el array ha sido modificado.
    Al clonarlo, la referencia al array cambia.
    */
    //this.colores.push(event.target.value)
  }

}
