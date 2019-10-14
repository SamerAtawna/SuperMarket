import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumit'
})
export class SumitPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let  sum = 0;
    value.forEach(element => {
     sum += element.Pay.reduce((a, b) => a + b, 0);
    });
    return `${sum}₪`;
  }

}
