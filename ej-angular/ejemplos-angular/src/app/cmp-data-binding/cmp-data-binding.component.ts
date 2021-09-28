import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre: string = 'Falco'

  deshabilitado: boolean = true

  persona = {
    nombre: 'Rob',
    apellido: 'Stark'
  }

  constructor() { }

  ngOnInit(): void {
  }

  getSaludo(nombre: string): string {
    return 'Hola ' + nombre
  }

  muestraMensaje(msg: string, event: MouseEvent): void {
    alert(msg);
    console.log(event);
    (event.target as HTMLElement).innerText = 'texto'
  }

  getIntroBatman(): string {
    return new Array(16).join(1 - ('a' as any) + '') + ' Batman!'
  }

  canta() {
    const synth = window.speechSynthesis

    synth.speak(new SpeechSynthesisUtterance(this.getIntroBatman()))
  }

  resetearNombre(): void {
    this.nombre = ''
  }

  /*
  
  Replicar funcionamiento de ngModel

  */

  texto: string = 'texto';

  modificarInputTexto(event: any) {
    this.texto = (event.target as HTMLInputElement).value
  }
}
