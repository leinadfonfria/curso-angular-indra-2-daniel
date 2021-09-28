import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario: any = {
    nombre: '',
    apellidos: '',
    email: ''
  }

  ocultarDatos: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(nombre: string, apellidos: string, email: string): void {
    this.usuario.nombre = nombre;
    this.usuario.apellidos = apellidos;
    this.usuario.email = email;

    this.ocultarDatos = Object.values(this.usuario).every(val => val ==='')
  }
}
