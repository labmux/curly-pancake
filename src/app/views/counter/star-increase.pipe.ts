import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starCounter'
})
export class StarIncreasePipe implements PipeTransform {
  output = '';

  transform(value: number, args?: any): any {
    if (value % 5 === 0) this.output += '*';

    return this.output;
  }

}
