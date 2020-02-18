import { Component, OnInit } from '@angular/core';
import { ContactDetails } from '../contact-details';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // contact =new ContactDetails(); 
  // phone = this.contact.getMobile();
  // email = this.contact.getEmail();
  // address = this.contact.getAddress();
  mail:string = '';
  mForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.mForm = fb.group({
      'mail':[null,Validators.compose([Validators.required,Validators.email])]
    })
  }
  addPost(post){
    this.mail  = post.description;
    // t÷his.name = post.name;
 }
  ngOnInit() {
  }

}
