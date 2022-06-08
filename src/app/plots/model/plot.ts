export interface Plot{

  id: string;
  farmId: string[];
  name: string;
  area: number;
  totalProduction: number;
  productivity: number;

  productions:{
    name:string;
    quantity:number;
  }[];

}

