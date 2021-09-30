import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[powerMode]'
})
export class PowerModeDirective {

  colores = ['red','blue','yellow']
  posicionTop = 0
  posicionLeft = 0

  @HostBinding('style.position') position = 'relative'
  @HostBinding('style.top') top = '0px'
  @HostBinding('style.left') left = '0px'
  @HostBinding('style.color') color = 'red'

  @HostListener('input') onInput() {
    //this.posicionTop+=random(-10,10);
    this.posicionLeft+=random(-10,10);
    //this.posicionTop = this.posicionTop < 0 ? 0:this.posicionTop;
    this.posicionLeft = this.posicionLeft < 0 ? 0:this.posicionLeft;
    this.top = this.posicionTop+'px'
    this.left = this.posicionLeft+'px'
    this.color = this.colores[random(0,this.colores.length)]
  }

  constructor() { }

}

function random(min: number, max: number) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

