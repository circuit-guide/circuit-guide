import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1HeaderComponent } from './f1-header.component';

describe('F1HeaderComponent', () => {
  let component: F1HeaderComponent;
  let fixture: ComponentFixture<F1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
