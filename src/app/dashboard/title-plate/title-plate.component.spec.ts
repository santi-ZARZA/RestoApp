import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePlateComponent } from './title-plate.component';

describe('TitlePlateComponent', () => {
  let component: TitlePlateComponent;
  let fixture: ComponentFixture<TitlePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
