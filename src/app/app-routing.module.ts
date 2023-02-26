import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) 
  },
  { 
    path: 'testimonials',
    loadChildren: () => import('./testimonials/testimonials.module').then(m => m.TestimonialsModule)
  },
  { path: 'design-mentor', loadChildren: () => import('./design-mentor/design-mentor.module').then(m => m.DesignMentorModule) },
  { path: 'business-strategist', loadChildren: () => import('./business-strategist/business-strategist.module').then(m => m.BusinessStrategistModule) },
  { path: 'brand-consultant', loadChildren: () => import('./brand-consultant/brand-consultant.module').then(m => m.BrandConsultantModule) },
  { path: 'motivational-speaker', loadChildren: () => import('./motivational-speaker/motivational-speaker.module').then(m => m.MotivationalSpeakerModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
