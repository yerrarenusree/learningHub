import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  heading = 'Upcoming Events';
  constructor(public router: Router) {
    this.heading = this.router.url === '/home' ? 'Upcoming Events' : 'Events';
  }
}
