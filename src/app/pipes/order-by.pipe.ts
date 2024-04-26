import { Pipe, PipeTransform } from '@angular/core';
import { IResultList } from '../interface/result-list.interface';

@Pipe({
  name: 'orderBy',
  standalone: true,
})
export class OrderByPipe implements PipeTransform {
  transform(value: IResultList[] | null, sortKey = 'name'): IResultList[] {
    if (!value) return [];
    if (!sortKey) return value;

    const sortColumn = sortKey as keyof IResultList;

    return value.sort((a: IResultList, b: IResultList) => {
      const aItem = a[sortColumn];
      const bItem = b[sortColumn];

      if (aItem < bItem) {
        return -1;
      }
      if (aItem > bItem) {
        return 1;
      }
      return 0;
    });
  }
}
