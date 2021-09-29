import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css']
})
export class LeiaComponent implements OnInit {

  @Input() nombre: string = ''
  @Output() nombreCambiado = new EventEmitter<string>()//creamos un evento llamado nombreCambiado e indicamos que es un output

  constructor() { }

  ngOnInit(): void {
  }

  actualizarNombre(event: any): void {
    //this.nombre = event.target.value
    console.log(event.target.value)
    this.nombreCambiado.emit(event.target.value)
  }
}
