import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  transform(value: string, words: string[]): string {

    words.forEach( word => {
      value = value.replace(new RegExp(word,'gi'),'*'.repeat(word.length))
      //replaceAll está disponible en la última versión de ECMACScript (2021)
    })
                                      //g -> aplica a todas las coincidencias
                                      //i -> ignora mayúsculas
    return value;
  }

}

/*
ocultar palabras

hola mundo cruel | hideWords:[hola','cruel] => **** mundo *****
*/