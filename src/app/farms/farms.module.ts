import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { FarmFormComponent } from './farm-form/farm-form.component';
import { FarmsRoutingModule } from './farms-routing.module';
import { FarmsComponent } from './farms/farms.component';
import { FarmEditFormComponent } from './farm-edit-form/farm-edit-form.component';
import { PlotsComponent } from './plots/plots.component';
import { PlotsFormComponent } from './plots-form/plots-form.component';
import { PlotsEditFormComponent } from './plots-edit-form/plots-edit-form.component';





@NgModule({
  declarations: [
    FarmsComponent,
    FarmFormComponent,
    FarmEditFormComponent,
    PlotsComponent,
    PlotsFormComponent,
    PlotsEditFormComponent
  ],
  imports: [
    CommonModule,
    FarmsRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FarmsModule { }
