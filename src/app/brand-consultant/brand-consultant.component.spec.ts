import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandConsultantComponent } from './brand-consultant.component';

describe('BrandConsultantComponent', () => {
  let component: BrandConsultantComponent;
  let fixture: ComponentFixture<BrandConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandConsultantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
