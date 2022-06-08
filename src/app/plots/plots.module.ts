import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlotsRoutingModule } from './plots-routing.module';
import { PlotsComponent } from './plots/plots.component';


@NgModule({
  declarations: [
    PlotsComponent
  ],
  imports: [
    CommonModule,
    PlotsRoutingModule
  ]
})
export class PlotsModule { }
