import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivationalSpeakerComponent } from './motivational-speaker.component';

const routes: Routes = [{ path: '', component: MotivationalSpeakerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivationalSpeakerRoutingModule { }
