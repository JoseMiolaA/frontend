import { Farm } from './../model/farm';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  farms: Farm[] = [
    {id: 'id', name: 'Fazenda dos Guri', area: 22,production: 123.3, productivity: 10.12}
  ];
  displayedColumns = ['name', 'area', 'production', 'productivity']

  constructor() { }

  ngOnInit(): void {
  }

}
