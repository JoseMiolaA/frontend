import { Farm } from './../model/farm';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {

  farmId:string = '';

  constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.farmId = params['id'];
    })
  }

  ngOnInit(): void {
    console.log()

  }

}
