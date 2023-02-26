import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandConsultantRoutingModule } from './brand-consultant-routing.module';
import { BrandConsultantComponent } from './brand-consultant.component';


@NgModule({
  declarations: [
    BrandConsultantComponent
  ],
  imports: [
    CommonModule,
    BrandConsultantRoutingModule
  ]
})
export class BrandConsultantModule { }
