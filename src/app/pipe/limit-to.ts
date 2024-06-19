import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitTo implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...'; // Agrega puntos suspensivos al final si se trunca
    }
    return value;
  }
}
