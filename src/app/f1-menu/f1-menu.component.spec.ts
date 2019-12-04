import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1MenuComponent } from './f1-menu.component';

describe('F1MenuComponent', () => {
  let component: F1MenuComponent;
  let fixture: ComponentFixture<F1MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
