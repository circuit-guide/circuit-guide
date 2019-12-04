import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1TimezoneFilterComponent } from './f1-timezone-filter.component';

describe('F1TimezoneFilterComponent', () => {
  let component: F1TimezoneFilterComponent;
  let fixture: ComponentFixture<F1TimezoneFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1TimezoneFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1TimezoneFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
