import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temaCursPipe',
})
export class TemaCursPipePipe implements PipeTransform {
  transform(
    value: Date,
    even: boolean,
    trueArgs: string,
    falseArgs: string
  ): string {
    return `~ ${new DatePipe('en-US').transform(
      value,
      even ? trueArgs : falseArgs
    )} ~`;
  }
}
