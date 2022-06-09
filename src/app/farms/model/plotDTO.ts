export interface PlotDTO{
  id?:string;
  farmId: string;
  name: string;
  area: number;

  productions:{
    name:string;
    quantity:number;
  }[];

}

