import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePercentage'
})
export class PricePercentagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.price/(value.price + value.oldprice);
  }

}
