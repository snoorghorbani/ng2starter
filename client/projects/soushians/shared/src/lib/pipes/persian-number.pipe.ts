import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'persianNumber' })
export class PersianNumberPipe implements PipeTransform {
    transform(value: string, exponent: string): string {
        if (!value) return '';
        var res = '';

        for (var index = 0; index < value.length; index++) {
            res += (+value[index]).toLocaleString('fa-IR', {
                useGrouping: false
            });
        }

        return res;
    }
}