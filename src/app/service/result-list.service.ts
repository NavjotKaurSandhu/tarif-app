import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResultList } from '../interface/result-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ResultListService {

  API_URL = 'api/list';

  constructor(private _http: HttpClient) {
  }

  getResultList() {
    return this._http.get<IResultList[]>(this.API_URL);
  }

}
