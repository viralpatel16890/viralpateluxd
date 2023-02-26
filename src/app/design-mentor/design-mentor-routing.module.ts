import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignMentorComponent } from './design-mentor.component';

const routes: Routes = [{ path: '', component: DesignMentorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignMentorRoutingModule { }
