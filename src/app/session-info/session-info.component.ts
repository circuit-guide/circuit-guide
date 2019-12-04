import { Component, OnInit, Input } from '@angular/core';
import { F1Session } from '../f1-session';
import { F1DataService } from '../f1-data.service';

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.scss']
})
export class SessionInfoComponent implements OnInit {

  constructor(private f1DataService: F1DataService) { }
  @Input() session: F1Session;
  @Input() timezone: string;
  sessionDate: string;
  sessionTime: string;
  ngOnInit() {
    this._setSessionDate();
    this._setSessionTime();
  }

  ngOnChanges() {
    this._setSessionDate();
    this._setSessionTime();
  }

  private _setSessionDate(): void {
    this.sessionDate = this.f1DataService.sessionWithTimezone(this.session, this.timezone, 'DD MMM \'YY');
  }

  private _setSessionTime(): void {
    this.sessionTime = this.f1DataService.sessionWithTimezone(this.session, this.timezone, 'HH:mm');
  }
}