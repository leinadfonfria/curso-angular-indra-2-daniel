import { Component, EventEmitter, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-s-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css'],
  //providers: [DatosService]
})//providers: DatosService -> De este modo se crea una instancia de DatosService para cada componente donde se use
export class LeiaComponent implements OnInit {

  tareas: Array<Tarea> = []
  mensaje: string = ''

  constructor(
    private eventosService: EventosService,
    private datosService: DatosService
    ) { }

  ngOnInit(): void {
    this.tareas = this.datosService.getTareas()
    this.datosService.tareaGuardada.subscribe(data => this.mensaje = data)
  }

  darLaNoticia() {
    this.eventosService.darNoticia.emit('Soy Leia y soy tu hermana y nos hemos besado 🤮')
  }

  
  guardarTarea(event: any) {
    this.datosService.addTarea(event.target.value, 'Leia')
  }
}
