import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() specificCardDetails: any;
  constructor(public router: Router) {}

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
