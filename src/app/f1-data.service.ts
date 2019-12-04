import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { F1Event } from './f1-event';
import { Observable } from 'rxjs';
import { F1Session } from './f1-session';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class F1DataService {
  private raceDataLocation = 'api/racedata.json';

  constructor(private http: HttpClient) { }

  getF1Events(): Observable<F1Event[]> {
    return this.http.get<F1Event[]>(this.raceDataLocation);
  }

  sessionWithTimezone(session: F1Session, timezone: string, format: string): string {
    return moment.tz(session.dateString, timezone).format(format)
  }

  getEventStartEndDate(f1Event: F1Event, timezone: string): string {
    const dateFormat = 'DD MMM';
    return [
      moment.tz(f1Event.sessions[0].dateString, timezone).format(dateFormat),
      moment.tz(f1Event.sessions[f1Event.sessions.length - 1].dateString, timezone).format(dateFormat)]
      .join(" - ");
  }
}
