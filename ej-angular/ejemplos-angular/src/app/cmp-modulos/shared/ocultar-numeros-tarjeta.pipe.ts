import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarNumerosTarjeta'
})
export class OcultarNumerosTarjetaPipe implements PipeTransform {

  transform(value: string): string {
    return '**** **** **** ' + value.slice(-4);
  }

}
