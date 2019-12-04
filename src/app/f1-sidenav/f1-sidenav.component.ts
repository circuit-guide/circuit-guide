import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-f1-sidenav',
  templateUrl: './f1-sidenav.component.html',
  styleUrls: ['./f1-sidenav.component.scss']
})
export class F1SidenavComponent implements OnInit {
  filtersSideNavOpened: boolean;
  menuSideNavOpened: boolean;
  showFutureOnly: boolean = true;
  selectedTimezone: string;
  private _showFutureCookieName = 'show-future-only';

  constructor(private cookieService: CookieService) { }

  toggleShowFutureOnly(): void {
    this.showFutureOnly = !this.showFutureOnly;
    this.cookieService.set(this._showFutureCookieName, this.showFutureOnly + '');
  }

  updateTimezone(timezone: string): void {
    this.selectedTimezone = timezone;
  }

  ngOnInit() {
    const showFutureOnlyCookieValue = this.cookieService.get(this._showFutureCookieName);
    this.showFutureOnly = !!showFutureOnlyCookieValue ? showFutureOnlyCookieValue === 'true' : true;
  }
}
