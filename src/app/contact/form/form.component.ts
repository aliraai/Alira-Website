import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  rForm:FormGroup;
  post:any;
  message:string='';
  name:string = '';
  email:string = '';
  company:string='';
  constructor(private fb:FormBuilder) {

    this.rForm = fb.group({
        'name':[null,Validators.required],
        'message':[null, Validators.required],
        'email': [null, Validators.compose([Validators.required,Validators.email])],
        'company':[null,Validators.required],
        'validate':''
    });

   }

   addPost(post){
      this.message  = post.description;
      this.name = post.name;
   }
  ngOnInit(): void {
  }

}
