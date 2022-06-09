import { PlotsFormComponent } from './../plots-form/plots-form.component';
import { PlotsServiceService } from './../service/plots/plots-service.service';
import { Farm } from './../model/farm';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Plot } from '../model/plot';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { FarmsService } from '../service/farms.service';



@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {

  farmId:string = '';
  farmName:string = '';
  plots: Observable<Plot[]>;
  displayedColumns = ['name', 'area', 'totalProduction', 'productivity', 'buttons']


  constructor(private route: ActivatedRoute,private plotsService: PlotsServiceService,private farmsService:FarmsService, public dialog: MatDialog) {
      this.route.queryParams.subscribe(params => {
        this.farmId = params['id'];
    })
    this.plots = this.plotsService.getByFarmId(this.farmId)
    .pipe(
      catchError(error => {
        this.openError('Não foi possível carregar informações')
        return of([])
      })
    );
    farmsService.getById(this.farmId).subscribe(a => {this.farmName = a.name});
  }
  ngOnInit(): void {
    console.log()

  }
  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  onAdd(){
    const dialogRef = this.dialog.open(PlotsFormComponent, {
      width: '250px',
      data:{
        farmId:this.farmId
      }
    });
    dialogRef.afterClosed().subscribe(farm => {console.log(farm)});

  }
  onEdit(plot:Plot){

  }

  onFoward(plot:Plot){

  }

  onDelete(plot:Plot){

  }

}
