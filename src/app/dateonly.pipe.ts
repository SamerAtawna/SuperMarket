import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateonly'
})
export class DateonlyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const year = value.slice(0, 4);
    const month = value.slice(5, 7);
    const day = value.slice(8, 10);

    return `${day}/${month}/${year}`;
  }
}
