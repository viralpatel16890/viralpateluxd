import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessStrategistRoutingModule } from './business-strategist-routing.module';
import { BusinessStrategistComponent } from './business-strategist.component';


@NgModule({
  declarations: [
    BusinessStrategistComponent
  ],
  imports: [
    CommonModule,
    BusinessStrategistRoutingModule
  ]
})
export class BusinessStrategistModule { }
