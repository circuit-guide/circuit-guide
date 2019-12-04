import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1SidenavComponent } from './f1-sidenav.component';

describe('F1SidenavComponent', () => {
  let component: F1SidenavComponent;
  let fixture: ComponentFixture<F1SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1SidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
