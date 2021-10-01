import { EventEmitter, Injectable } from '@angular/core';
import { Tarea } from './tarea';
import { v4 as uuidv4} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  tareaGuardada = new EventEmitter<string>()

  tareas: Array<Tarea> = [
    new Tarea('Eliminar la estrella de la muerte', false, 'Leia', '1312-1312'),
    new Tarea('Matar a Palpatine', true, 'Luke', '2324-3432')
  ]

  constructor() { }

  getTareas(): Array<Tarea> {
    return this.tareas
  }

  addTarea(titulo: string, autor: string): void {
    this.tareas.push(new Tarea(titulo,false,autor, uuidv4()))
    this.tareaGuardada.emit(autor + ' ha guardado una tarea')
  }
}
