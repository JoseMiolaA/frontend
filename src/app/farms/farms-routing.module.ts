import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FarmsComponent } from './farms/farms.component';
import { PlotsComponent } from './plots/plots.component';

const routes: Routes = [
  {path: '', component: FarmsComponent},
  {path: 'plots', component: PlotsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmsRoutingModule { }


