import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {
  @Output() selectedType = new EventEmitter<string>();
  cities:any =  [];

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY', type: 'test'},
            {name: 'Rome', code: 'RM', type: 'testing'},
            {name: 'London', code: 'LDN', type: 'tst'},
            {name: 'Istanbul', code: 'IST', type: 't'},
        ];
    }

    OnchangeValue(event: any) {
      this.selectedType.emit(event.value);
    }
}
