import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1EventListComponent } from './f1-event-list.component';

describe('F1EventListComponent', () => {
  let component: F1EventListComponent;
  let fixture: ComponentFixture<F1EventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1EventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
