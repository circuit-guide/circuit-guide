import { Component, OnInit, Input } from '@angular/core';
import { F1Event } from '../f1-event';
import { F1DataService } from '../f1-data.service';

@Component({
  selector: 'app-f1-event-panel',
  templateUrl: './f1-event-panel.component.html',
  styleUrls: ['./f1-event-panel.component.scss']
})
export class F1EventPanelComponent implements OnInit {
  @Input() f1Event: F1Event;
  @Input() isNextEvent: boolean;
  @Input() timezone: string;
  eventDatesString: string;
  constructor(private f1EventDataService: F1DataService) { }

  ngOnInit() {
    this._setEventDatesString();
  }

  ngOnChanges() {
    this._setEventDatesString();
  }

  private _setEventDatesString() {
    this.eventDatesString = this.f1EventDataService.getEventStartEndDate(this.f1Event, this.timezone);
  }
}
