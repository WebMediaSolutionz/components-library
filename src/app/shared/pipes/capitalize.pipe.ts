import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .toLowerCase()
      .replace( /\b./g, a => a.toUpperCase() );
  }

}
