import { FarmEditFormComponent } from './../farm-edit-form/farm-edit-form.component';
import { FarmFormComponent } from './../farm-form/farm-form.component';
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
    this.farms = this.farmsService.getAll()
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
    const dialogRef = this.dialog.open(FarmFormComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(farm => {console.log(farm)});
  }
  onEdit(farm:Farm){
    const dialogRef = this.dialog.open(FarmEditFormComponent, {
      width: '250px',
      data: farm
    });
    dialogRef.afterClosed().subscribe(farm => {console.log(farm)});  }

  onFoward(){
    console.log('onCreate');
  }

  onDelete(farm:Farm){
    this.farmsService.delete(farm).subscribe(farm => {});
    window.location.reload();
  }


}
