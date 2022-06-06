import { FarmsService } from './../service/farms.service';
import { Farm } from './../model/farm';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  farms: Observable<Farm[]>;
  displayedColumns = ['name', 'area', 'totalProduction', 'productivity']

  constructor(private farmsService: FarmsService) {
    this.farms = this.farmsService.list();

   }

  ngOnInit(): void {
  }

}
