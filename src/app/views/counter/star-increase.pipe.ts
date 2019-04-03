import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starCounter'
})
export class StarIncreasePipe implements PipeTransform {

    /**
     * Every 5 counts, adds one star
     * @param {number} value
     * @param {string} stars
     * @returns {any}
     */
  transform(value: number, stars: string): any {
    if (value % 5 === 0) stars += '*';

    return stars;
  }
}
