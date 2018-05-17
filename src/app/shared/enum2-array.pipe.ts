import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enum2Array'
})
export class Enum2ArrayPipe implements PipeTransform {
    transform(data: Object) {
        const keys = Object.keys(data);
        return keys.slice(keys.length / 2);
    }
}
