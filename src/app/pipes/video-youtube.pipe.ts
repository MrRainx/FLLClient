import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {
    }

    transform(url: string, ...args: any[]): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url.replace('watch?v=', 'embed/'));
    }

}
