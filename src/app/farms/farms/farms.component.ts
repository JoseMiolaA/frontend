import { FarmsService } from './../service/farms.service';
import { Farm } from './../model/farm';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  farms: Observable<Farm[]>;
  displayedColumns = ['name', 'area', 'totalProduction', 'productivity', 'buttons']

  constructor(private farmsService: FarmsService, public dialog: MatDialog) {
    this.farms = this.farmsService.list()
    .pipe(
      catchError(error => {
        this.openError('Não foi possível carregar informações')
        return of([])
      })
    );

   }
   openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
  }

  onAdd(){
    console.log('onAdd');
  }

}
