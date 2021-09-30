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
}
