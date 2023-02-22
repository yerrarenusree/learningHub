import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class EventCardComponent {
  @Input() heading: any;
  @Input() specificCardDetails: any;
  constructor(
    public router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}


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
          this.specificCardDetails.map((data: any) => {
            if(data.id === id) {
              data.enrolled = data.enrolled + 1;
            }
          });
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
