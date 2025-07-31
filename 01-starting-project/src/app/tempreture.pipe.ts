import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unit: 'C' | 'F' = 'C'): string {
    if (value == null || isNaN(value)) return '';

    if (unit === 'F') {
      // Celsius to Fahrenheit
      return `${(value * 9/5 + 32).toFixed(2)} °F`;
    } else {
      // Fahrenheit to Celsius
      return `${((value - 32) * 5/9).toFixed(2)} °C`;
    }
  }
}
