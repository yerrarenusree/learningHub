import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  CardDetails = [
    {
      id: 1,
      title: 'Java',
      link: 'https://www.youtube.com/watch?v=BGTx91t8q50',
      image: '../../assets/java.png'
    },
    {
      id: 2,
      title: 'soft skills',
      link: 'https://www.fluentu.com/blog/english/how-to-speak-english-well-fluently/',
      image: '../../assets/softskills.png'
    },
    {
      id: 3,
      title: 'Jbhunt',
      link: 'https://www.jbhunt.com',
      image: '../../assets/jbhunt.png'
    },
    {
      id: 4,
      title: 'Html',
      link: 'https://www.jbhunt.com',
      image: '../../assets/html.png'
    },
    {
      id: 5,
      title: 'CSS',
      link: 'https://www.jbhunt.com',
      image: '../../assets/css.png'
    },
    {
      id: 6,
      title: 'Java Script',
      link: 'https://www.jbhunt.com',
      image: '../../assets/javascript.png'
    },
    {
      id: 7,
      title: 'Cypress',
      image: '',
      link: 'https://www.jbhunt.com',
    },
    {
      id: 8,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 9,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 10,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 11,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 12,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 13,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 14,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 15,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 16,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 17,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
    {
      id: 18,
      title: 'Testing',
      link: 'https://www.jbhunt.com',
      image: '',
    },
  ];
  specificCardDetails: any = [];
  constructor(public router: Router) {} 

  ngOnInit() {
    if(this.router.url === '/home') {
      this.specificCardDetails= [...this.CardDetails.splice(0, 8)];
    } else {
      this.specificCardDetails = [...this.CardDetails];
    }
  }

  selectedType(event: any) {}
}
