import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class EventCardComponent {
  heading = 'Upcoming Events';
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
  constructor(
    public router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {
    this.heading = this.router.url === '/home' ? 'Upcoming Events' : 'Events';
  }

  ngOnInit() {
    if(this.router.url === '/home') {
      this.specificCardDetails= [...this.CardDetails.splice(0, 4)];
    } else {
      this.specificCardDetails = [...this.CardDetails];
    }
  }

  goToEventPage() {
    this.router.navigate(['/events']);
  }

  enroll(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.messageService.add({severity:'success', summary:'Confirmed', detail:'You are successfully enrolled'});
      },
      reject: (type: any) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
      }
  });
  }
}
