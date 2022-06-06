import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms/farms.component';




@NgModule({
  declarations: [
    FarmsComponent
  ],
  imports: [
    CommonModule,
    FarmsRoutingModule,
    AppMaterialModule
  ]
})
export class FarmsModule { }
