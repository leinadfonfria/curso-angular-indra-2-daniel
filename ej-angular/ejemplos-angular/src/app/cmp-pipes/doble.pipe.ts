import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, suma?: number): number {
    return value*2 + (suma ? suma : 0);
  }

}

