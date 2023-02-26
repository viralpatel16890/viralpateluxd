import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalSpeakerComponent } from './motivational-speaker.component';

describe('MotivationalSpeakerComponent', () => {
  let component: MotivationalSpeakerComponent;
  let fixture: ComponentFixture<MotivationalSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationalSpeakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivationalSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
