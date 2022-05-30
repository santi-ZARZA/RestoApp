import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePlateComponent } from './image-plate.component';

describe('ImagePlateComponent', () => {
  let component: ImagePlateComponent;
  let fixture: ComponentFixture<ImagePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
