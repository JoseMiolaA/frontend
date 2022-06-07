import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms/farms.component';
import { FarmFormComponent } from './farm-form/farm-form.component';




@NgModule({
  declarations: [
    FarmsComponent,
    FarmFormComponent
  ],
  imports: [
    CommonModule,
    FarmsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class FarmsModule { }
