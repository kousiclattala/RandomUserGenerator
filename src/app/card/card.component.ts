import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() user;

  @Output('callUser') callUser: EventEmitter<any> = new EventEmitter<any>();

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;
  faDatabase = faDatabase;

  constructor() {}

  ngOnInit(): void {}

  reloadUser() {
    this.callUser.emit();
  }
}
