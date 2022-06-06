import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms/farms.component';




@NgModule({
  declarations: [
    FarmsComponent
  ],
  imports: [
    CommonModule,
    FarmsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class FarmsModule { }
