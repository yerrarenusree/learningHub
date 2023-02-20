import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  CardDetails = [
    {
      id: 1,
      title: 'Java',
      link: 'https://www.youtube.com/watch?v=BGTx91t8q50',
    },
    {
      id: 2,
      title: 'soft skills',
      link: 'https://www.fluentu.com/blog/english/how-to-speak-english-well-fluently/',
    },
    {
      id: 3,
      title: 'Jbhunt',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 4,
      title: 'Html',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 5,
      title: 'CSS',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 6,
      title: 'Java Script',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 7,
      title: 'Cypress',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 8,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 9,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 10,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 11,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 12,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 13,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 14,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 15,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 16,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 17,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 18,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
    },
  ];
  specificCardDetails: any = [];

  constructor(public router: Router) {}

  ngOnInit() {
    if(this.router.url === '/home') {
      this.specificCardDetails= [...this.CardDetails.splice(0, 6)];
    } else {
      this.specificCardDetails = [...this.CardDetails];
    }
  }

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
