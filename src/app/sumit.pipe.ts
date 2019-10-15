import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumit'
})
export class SumitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
 
    return `${value}₪`;
  }

}
