import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { F1HeaderComponent } from './f1-header/f1-header.component';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { F1EventListComponent } from './f1-event-list/f1-event-list.component';
import { SessionInfoComponent } from './session-info/session-info.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { F1TimezoneFilterComponent } from './f1-timezone-filter/f1-timezone-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { F1SidenavComponent } from './f1-sidenav/f1-sidenav.component';
import { F1EventPanelComponent } from './f1-event-panel/f1-event-panel.component';
import { CookieService } from 'ngx-cookie-service';
import { F1MenuComponent } from './f1-menu/f1-menu.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    F1HeaderComponent,
    F1EventListComponent,
    SessionInfoComponent,
    F1TimezoneFilterComponent,
    F1SidenavComponent,
    F1EventPanelComponent,
    F1MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
