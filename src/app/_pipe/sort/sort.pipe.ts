import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ordenar"
})
export class SortPipe  implements PipeTransform {
  transform(array: any, field: string): any[] {
    let invertido: boolean = false;
    //SI INCLIU UN SIGNE DE RESTAR,TREIEM EL SIGNE I IDENTIFIQUEM QUE S'HA D'INVERTIR L'ARRAY
    if(field.includes('-')){
      invertido = true;
      field = field.substr(1);
    }
    if (!Array.isArray(array)) {
      return;
    }
    //ORDENACIÓ DELS CAMPS
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    if(invertido){
      return array.reverse();
    }
    return array;
  }
}