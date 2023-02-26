import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessStrategistComponent } from './business-strategist.component';

describe('BusinessStrategistComponent', () => {
  let component: BusinessStrategistComponent;
  let fixture: ComponentFixture<BusinessStrategistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessStrategistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessStrategistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
