import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1EventPanelComponent } from './f1-event-panel.component';

describe('F1EventPanelComponent', () => {
  let component: F1EventPanelComponent;
  let fixture: ComponentFixture<F1EventPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1EventPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1EventPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
