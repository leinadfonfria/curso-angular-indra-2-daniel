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

  animales = ['perro','gato','canario','tortuga']

  animales2 = [
    {id:1, tipo: 'perro'},
    {id:3, tipo: 'canario'},
    {id:4, tipo: 'tortuga'},
    {id:2, tipo: 'gato'},    
  ]

  colores=['orange','blue','red']

  constructor() { }

  ngOnInit(): void {
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
}
