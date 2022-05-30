import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPlateComponent } from './actions-plate.component';

describe('ActionsPlateComponent', () => {
  let component: ActionsPlateComponent;
  let fixture: ComponentFixture<ActionsPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsPlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
