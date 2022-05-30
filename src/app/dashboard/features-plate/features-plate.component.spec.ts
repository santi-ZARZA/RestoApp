import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesPlateComponent } from './features-plate.component';

describe('FeaturesPlateComponent', () => {
  let component: FeaturesPlateComponent;
  let fixture: ComponentFixture<FeaturesPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
