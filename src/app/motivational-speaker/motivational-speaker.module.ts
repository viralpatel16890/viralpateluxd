import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationalSpeakerRoutingModule } from './motivational-speaker-routing.module';
import { MotivationalSpeakerComponent } from './motivational-speaker.component';


@NgModule({
  declarations: [
    MotivationalSpeakerComponent
  ],
  imports: [
    CommonModule,
    MotivationalSpeakerRoutingModule
  ]
})
export class MotivationalSpeakerModule { }
