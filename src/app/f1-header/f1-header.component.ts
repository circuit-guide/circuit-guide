import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-f1-header',
  templateUrl: './f1-header.component.html',
  styleUrls: ['./f1-header.component.scss']
})
export class F1HeaderComponent implements OnInit {
  @Output() leftMenuOpened: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  toggleMenu() {
    this.leftMenuOpened.emit(true);
  }

  ngOnInit() {
  }
}