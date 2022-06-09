import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plot } from '../../model/plot';
import { PlotDTO } from '../../model/plotDTO';


@Injectable({
  providedIn: 'root'
})
export class PlotsServiceService {

  private API = '/api/plot';

  constructor(private httpClient: HttpClient) {


  }
  getByFarmId(farmId:string){
    let newUrl = this.API + '/farm_id/' + farmId;
    console.log(farmId)
    return this.httpClient.get<Plot[]>(newUrl);
  }

  create(plot:PlotDTO){
    return this.httpClient.post<Plot>(this.API, plot);
  }

  edit(plot:PlotDTO){
    console.log(plot);
    return this.httpClient.post<Plot>(this.API, plot);
  }

  delete(plot: Plot){
    let newURL = this.API + '/id/' + plot.id;
    return this.httpClient.delete<Plot>(newURL);
  }


}
