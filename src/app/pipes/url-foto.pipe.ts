import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'urlFoto'
})
export class UrlFotoPipe implements PipeTransform {

  transform(urlFoto: string, ...args: any[]): any {

    if (urlFoto) {
      return urlFoto;
    }
    return 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?cs=srgb&dl=apartment-books-chairs-2079246.jpg&fm=jpg';
  }

}
