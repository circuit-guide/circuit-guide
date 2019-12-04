import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, filter, ignoreElements } from 'rxjs/operators';
import * as moment from 'moment-timezone';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-f1-timezone-filter',
  templateUrl: './f1-timezone-filter.component.html',
  styleUrls: ['./f1-timezone-filter.component.scss']
})

export class F1TimezoneFilterComponent implements OnInit {
  @Output() timezoneChange: EventEmitter<string> = new EventEmitter<string>();
  timezoneCtrl = new FormControl();
  filteredTimezones: Observable<string[]>;
  timezoneList: string[];
  private _cookieName: string = "f1-default-timezone";

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.timezoneList = moment.tz.names();
    let defaultTimezone: string = this._getDefaultTimezone();
    this.updateSelectedTimezone(defaultTimezone);
    this.timezoneCtrl.setValue(defaultTimezone);
    this.filteredTimezones = this.timezoneCtrl.valueChanges
      .pipe(
        startWith(''),
        map(timezone => timezone ? this._filterTimezones(timezone) : this.timezoneList.slice())
      );
  }

  private _getDefaultTimezone(): string {
    const cookieTimezone = this.cookieService.get(this._cookieName);
    return !!cookieTimezone ? cookieTimezone : moment.tz.guess()
  }

  updateSelectedTimezone(timezone: string) {
    this.timezoneChange.emit(timezone);
    this.cookieService.set(this._cookieName, timezone);
  }

  private _filterTimezones(value: string): string[] {
    return this.timezoneList.filter(timezone => timezone.toLowerCase().replace("_", " ").indexOf(value.toLowerCase().replace("_", "")) > -1);
  }
}