import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mbps',
  standalone: true,
})
export class MbpsPipe implements PipeTransform {

  transform(value: number|null): unknown {
    if (value === null) {
      return null;
    }
    const k = 1024;

    const convertedValue = Math.floor(Math.log(value) / Math.log(k));

    return `${(value / Math.pow(k, convertedValue)).toFixed(2)}`;
  }
}
