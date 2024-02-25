import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frenchDate',
  standalone: true
})
export class FrenchDatePipe implements PipeTransform {

  transform(value: string): any {
    const date: Date = new Date(value);
    let formattedDate: string = new Intl.DateTimeFormat('fr-FR', {
      dateStyle: "full"
    }).format(date);

    const parts: string[] = formattedDate.split(' ');
    parts[0] = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    parts[2] = parts[2].charAt(0).toUpperCase() + parts[2].slice(1);
    formattedDate = parts.join(' ');

    return formattedDate;
  }

}
