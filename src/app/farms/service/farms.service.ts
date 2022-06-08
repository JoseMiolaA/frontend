import { Farm } from './../model/farm';
import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  private API = '/api/farm';

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Farm[]>(this.API);
  }
  getById(id:string){
    let newURL = this.API + '/id/' + id;
    return this.httpClient.get<Farm>(newURL);
  }

  create(farm: Farm){
    const sender = {
      name: farm.name
    }
    return this.httpClient.post<Farm>(this.API, sender);
  }
  edit(farm: Farm){
    return this.httpClient.post<Farm>(this.API, farm);
  }
  delete(farm: Farm){
    let newURL = this.API + '/id/' + farm.id;
    return this.httpClient.delete<Farm>(newURL);
  }

}
