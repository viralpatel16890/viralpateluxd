import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignMentorRoutingModule } from './design-mentor-routing.module';
import { DesignMentorComponent } from './design-mentor.component';


@NgModule({
  declarations: [
    DesignMentorComponent
  ],
  imports: [
    CommonModule,
    DesignMentorRoutingModule
  ]
})
export class DesignMentorModule { }
