import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessStrategistComponent } from './business-strategist.component';

const routes: Routes = [{ path: '', component: BusinessStrategistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessStrategistRoutingModule { }
