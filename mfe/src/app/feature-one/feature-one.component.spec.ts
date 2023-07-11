import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOneComponent } from './feature-one.component';

describe('FeatureOneComponent', () => {
  let component: FeatureOneComponent;
  let fixture: ComponentFixture<FeatureOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureOneComponent]
    });
    fixture = TestBed.createComponent(FeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
