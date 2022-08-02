import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCapital',
})
export class TextCapitalPipe implements PipeTransform {
  transform(value: string): string {
    const trimmed = value.trim();
    return (
      trimmed.charAt(0).toLocaleUpperCase() +
      trimmed.slice(1).toLocaleLowerCase()
    );
  }
}
