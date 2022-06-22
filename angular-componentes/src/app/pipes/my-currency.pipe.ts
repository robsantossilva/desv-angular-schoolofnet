import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency',
})
export class MyCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      value = 0;
    }
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
