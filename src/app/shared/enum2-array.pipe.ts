import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enum2Array'
})
export class Enum2ArrayPipe implements PipeTransform {
    transform(data: Object) {
       return Object.keys(data);
    }
}
