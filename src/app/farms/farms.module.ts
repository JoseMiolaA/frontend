import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms/farms.component';


@NgModule({
  declarations: [
    FarmsComponent
  ],
  imports: [
    CommonModule,
    FarmsRoutingModule,
    MatTableModule
  ]
})
export class FarmsModule { }
