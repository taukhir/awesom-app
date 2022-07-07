import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

//pure, false : impure pipe : transform method is invoked for every change detection
//pure : true : pure pipe : transform is invoked only when 
@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {
  transform(input: Array<Product>, searchKey: string): Array<Product> {
    if (!searchKey) return input;
    else
      return input.filter((product) => {
        return (
          product.name?.toString().toLowerCase() == searchKey ||
          product.id?.toString() == searchKey ||
          product.description?.toString().toLowerCase() == searchKey ||
          product.price?.toString().toLowerCase() == searchKey
        );
      });
  }
}
