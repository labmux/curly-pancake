import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starDecrease'
})
export class StarDecreasePipe implements PipeTransform {

    /**
     * Every 5 counts, remove one star
     * @param {number} value
     * @param {string} output
     * @returns {any}
     */
  transform(value: number, output: string): any {
      if (value % 5 === 0) {
          output = output.slice(0, output.length - 1);
      }
      return output;
  }
}
