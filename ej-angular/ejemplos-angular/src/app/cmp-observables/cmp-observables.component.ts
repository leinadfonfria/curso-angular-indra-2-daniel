import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Observer, pipe, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {

  suscripciones: Array<Subscription> = []
  mostrarComponente: boolean = true

  constructor() { }

  ngOnInit(): void {
    //this.crearObservable()
    //this.observableConOperadores()
    //this.observableDeEvento()
  }

  crearObservable() {
    const miObservable = new Observable((observer: Observer<string>) => {
      observer.next('Te acabas de suscribir')
      for(let i = 0; i < 5; i++) {
        setTimeout(() => {
          observer.next('El mensaje ' + i)
        },1000*i)
      }

      setTimeout(() => {
        //observer.error(new Error('Ha ocurrido un error'))
        observer.complete()
      }, 3000)

      setTimeout(()=> {
        observer.next('Este mensaje no se muestra porque ha saltado el error antes')
      }, 8000)
    })

    const subs: Subscription = miObservable.subscribe(
      (msg: string) => { //cuando se llama al next
        console.log(msg)
      },
      (err: Error) => { //cuando se llama al error
        console.error(err)
      },
      ()=>{//cuando se llama al complete
        console.log("El observable se ha terminado")
      }
    )

    this.suscripciones.push(subs)
  }

  observableConOperadores() {
    const miObservable = interval(1000)
            .pipe(
              filter(num => num % 2===0),//este observable solo va a emitir los números pares
              take(5),//recoge 5 números resultantes del filter
              map(n => 'Número ' + n )
            )
    //interval es un observable que retorna números 

    const subs: Subscription = miObservable.subscribe(num => console.log(num))
    this.suscripciones.push(subs)
  }

  observableDeEvento() {
    const miObservable = fromEvent(
        document.getElementsByTagName('h2'),
        'mouseenter'
      )//fromEvent crea un observable asociado a un evento (mouseenter)
    miObservable.subscribe(data=>console.log({data}))
  }

  cancelarSuscripciones() {
    this.suscripciones.forEach(s => s.unsubscribe())
  }

  toggleComponente() {
    this.mostrarComponente = !this.mostrarComponente
  }
}
