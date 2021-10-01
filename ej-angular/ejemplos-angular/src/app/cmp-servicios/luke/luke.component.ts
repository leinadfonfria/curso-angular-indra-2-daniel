import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { EventosService } from '../eventos.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-s-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css']
})
export class LukeComponent implements OnInit {

  nuevaNoticia: string = ''

  tareas: Array<Tarea> = []

  constructor(
    private eventosService: EventosService,
    private datosService: DatosService
    ) { }

  ngOnInit(): void {
    //obtener noticia
    this.eventosService.darNoticia.subscribe((data) => {
      this.nuevaNoticia = data
    })
    this.tareas = this.datosService.getTareas()
  }

}
