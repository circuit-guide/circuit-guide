import { Component, OnInit, Input } from '@angular/core';
import { F1Event } from '../f1-event';
import { F1DataService } from '../f1-data.service';
import { formatDate } from '@angular/common';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-f1-event-list',
  templateUrl: './f1-event-list.component.html',
  styleUrls: ['./f1-event-list.component.scss']
})
export class F1EventListComponent implements OnInit {
  f1EventList: F1Event[];
  filteredEventList: F1Event[];
  nextEvent: F1Event;
  @Input() isFutureOnlyChecked: boolean;
  @Input() timezone: string;

  constructor(private f1EventDataService: F1DataService) {
  }

  ngOnInit() {
    this.f1EventDataService.getF1Events().subscribe({
      next: newList => {
        this.f1EventList = newList;
        this._filterForFutureOnly();
        this._setNextEvent();
      }
    });
  }

  ngOnChanges() {
    this._filterForFutureOnly();
  }

  isNextEvent(f1Event: F1Event): boolean {
    if (!!f1Event && !!this.nextEvent) {
      return [f1Event.sessions[0].dateString].join('') === [this.nextEvent.sessions[0].dateString].join('');
    }
    return false;
  }

  private _setNextEvent(): void {
    let futureEvents = this._getFutureEvents();
    this.nextEvent = futureEvents[0];
  }

  private _getFutureEvents(): F1Event[] {
    let futureEvents: F1Event[];
    if (!!this.f1EventList) {
      futureEvents = this.f1EventList.filter((f1Event: F1Event) => {
        let lastSessionMoment = moment.tz(f1Event.sessions[f1Event.sessions.length - 1].dateString, this.timezone);
        return lastSessionMoment.isAfter(moment().add(1, 'days').tz(this.timezone));
      });
    }
    return futureEvents;
  }

  private _filterForFutureOnly(): void {
    this.filteredEventList = this.isFutureOnlyChecked ? this._getFutureEvents() : this.f1EventList;
  }
}
