import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeToNutritionistComponent } from './subscribe-to-nutritionist.component';

describe('SubscribeToNutritionistComponent', () => {
  let component: SubscribeToNutritionistComponent;
  let fixture: ComponentFixture<SubscribeToNutritionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeToNutritionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeToNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
