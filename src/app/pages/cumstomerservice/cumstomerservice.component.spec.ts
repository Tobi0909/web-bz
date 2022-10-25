import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumstomerserviceComponent } from './cumstomerservice.component';

describe('CumstomerserviceComponent', () => {
  let component: CumstomerserviceComponent;
  let fixture: ComponentFixture<CumstomerserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumstomerserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CumstomerserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
