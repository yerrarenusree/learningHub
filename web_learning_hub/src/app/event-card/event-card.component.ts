import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
 heading = 'Upcoming Events';
 constructor(public router: Router) {
  this.heading = this.router.url === '/home' ? 'Upcoming Events' : 'Events';
 }
}
