import { Component, OnInit } from '@angular/core';
import { ContactDetails } from '../common/contact-details';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact =new ContactDetails(); 
  phone = this.contact.getMobile();
  email = this.contact.getEmail();
  address = this.contact.getAddress();
  constructor() {
  }

  ngOnInit() {
  }

}
