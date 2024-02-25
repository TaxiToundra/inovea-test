import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frenchDate',
  standalone: true
})
export class FrenchDatePipe implements PipeTransform {

  //ADD DATE FORMAT TO FRENCH LOCALE
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
