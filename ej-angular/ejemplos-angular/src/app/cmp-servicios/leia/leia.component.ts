import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-s-leia',
  templateUrl: './leia.component.html',
  styleUrls: ['./leia.component.css']
})
export class LeiaComponent implements OnInit {

  tareas: Array<Tarea> = []

  constructor(
    private eventosService: EventosService,
    private datosService: DatosService
    ) { }

  ngOnInit(): void {
    this.tareas = this.datosService.getTareas()
  }

  darLaNoticia() {
    this.eventosService.darNoticia.emit('Soy Leia y soy tu hermana y nos hemos besado 🤮')
  }
}
