import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f1-menu',
  templateUrl: './f1-menu.component.html',
  styleUrls: ['./f1-menu.component.scss']
})
export class F1MenuComponent implements OnInit {
  navigationItems = [
    { "url": "/", "title": "Calendar", "icon": "right_arrow" },
    { "url": "/race", "title": "Race Results", "icon": "right_arrow" },
    { "url": "/drivers", "title": "Drivers Standings", "icon": "right_arrow" },
    { "url": "/constructors", "title": "Constructors Standings", "icon": "right_arrow" }

  ]
  constructor() { }

  ngOnInit() {
  }

}
