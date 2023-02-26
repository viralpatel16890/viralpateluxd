import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandConsultantComponent } from './brand-consultant.component';

const routes: Routes = [{ path: '', component: BrandConsultantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandConsultantRoutingModule { }
