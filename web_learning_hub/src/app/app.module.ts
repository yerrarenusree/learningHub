import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { CoursesComponent } from './courses/courses.component';
import { EventCardComponent } from './event-card/event-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    EventsComponent,
    CoursesComponent,
    EventCardComponent,
    CourseCardComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    PanelModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    DividerModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
