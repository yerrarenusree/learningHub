import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  header = 'Upcoming Events';
  CardDetails = [
    {
      id: 1,
      title: 'Testing',
      description: 'Testing testing Testing Tesrimg Testiinbg',
      presentedBy: 'Name',
      designation: 'Developer',
      enrolled: 0,
      time: '12:00 PM - 01:00 PM',
      date: 'Feb 20, 2023',
    },
    {
      id: 2,
      title: 'Testing',
      description: 'Testing testing Testing Tesrimg Testiinbg',
      presentedBy: 'Name',
      designation: 'Developer',
      enrolled: 0,
      time: '12:00 PM - 01:00 PM',
      date: 'Feb 20, 2023',
    },
    {
      id: 3,
      title: 'Testing',
      description: 'Testing testing Testing Tesrimg Testiinbg',
      presentedBy: 'Name',
      designation: 'Developer',
      enrolled: 0,
      time: '12:00 PM - 01:00 PM',
      date: 'Feb 20, 2023',
    },
    {
      id: 4,
      title: 'Testing',
      description: 'Testing testing Testing Tesrimg Testiinbg',
      presentedBy: 'Name',
      designation: 'Developer',
      enrolled: 0,
      time: '12:00 PM - 01:00 PM',
      date: 'Feb 20, 2023',
    },
    {
      id: 5,
      title: 'Testing',
      description: 'Testing testing Testing Tesrimg Testiinbg',
      presentedBy: 'Name',
      designation: 'Developer',
      enrolled: 0,
      time: '12:00 PM - 01:00 PM',
      date: 'Feb 20, 2023',
    },
    {
      id: 6,
      title: 'Testing',
      description: 'Testing testing Testing Tesrimg Testiinbg',
      presentedBy: 'Name',
      designation: 'Developer',
      enrolled: 0,
      time: '12:00 PM - 01:00 PM',
      date: 'Feb 20, 2023',
    },
    {
      id: 7,
      title: 'Testing',
      description: 'Testing testing Testing Tesrimg Testiinbg',
      presentedBy: 'Name',
      designation: 'Developer',
      enrolled: 0,
      time: '12:00 PM - 01:00 PM',
      date: 'Feb 20, 2023',
    },
    {
      id: 8,
      title: 'Testing',
      description: 'Testing testing Testing Tesrimg Testiinbg',
      presentedBy: 'Name',
      designation: 'Developer',
      enrolled: 0,
      time: '12:00 PM - 01:00 PM',
      date: 'Feb 20, 2023',
    },
  ];
  specificCardDetails: any = [];
  constructor(public router: Router) {
    this.header = this.router.url === '/home' ? 'Upcoming Events' : 'Events';
  }

  ngOnInit() {
    if (this.router.url === '/home') {
      this.specificCardDetails = [...this.CardDetails.splice(0, 4)];
    } else {
      this.specificCardDetails = [...this.CardDetails];
    }
  }

  selectedType(event: any) {}
}
