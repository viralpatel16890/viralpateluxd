import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignMentorComponent } from './design-mentor.component';

describe('DesignMentorComponent', () => {
  let component: DesignMentorComponent;
  let fixture: ComponentFixture<DesignMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignMentorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
