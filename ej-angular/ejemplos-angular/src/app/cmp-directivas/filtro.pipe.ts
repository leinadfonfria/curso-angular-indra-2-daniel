import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  //pure: false
})//pure: los pipes por defecto se ejecutan cuando se modifica el elemento sobre el que se aplica.
//como es un array, la referencia a éste no cambia, aunque cambie alguna de sus celdas
//pure actualiza el pipe cada vez que hacemos un cambio en toda la página
//esto es muy ineficiente
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, filtro: string): Array<string> {
    return value.filter(color => color.includes(filtro));
  }
}
