import { Farm } from './../model/farm';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  private API = '/api/farm';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Farm[]>(this.API);
  }
}