import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {

  @HostBinding('style.backgroundColor') colorFondo = 'white'
  //asociamos un estilo a una propiedad

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = 'white'
  }

  @Input('appMarcar') color: string
      //con este alias decimos que el  valor que se le pase a appMarcar se guarde en color
  
  constructor(
    private elementRef: ElementRef
  ) {
    //elementRef.nativeElement.style.backgroundColor = 'green'
    console.log(elementRef)
    //se accede al elemento que contiene la directiva
   }

  ngOnInit(): void {
    //this.color = this.color === '' ? 'red' : this.color
    this.color = this.color || 'red'
  }

   
}
