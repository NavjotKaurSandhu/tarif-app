import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IResultList } from '../interface/result-list.interface';
import { resultList } from '../../assets/data/result-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const list: IResultList[] = [...resultList];
    return {
      list
    };
  }

}
