import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {
  rForm:FormGroup;
  post:any;
  name:string = '';
  email:string = '';
  phone:string='';
  linkedIn:string='';
  constructor(private fb:FormBuilder) {

    this.rForm = fb.group({
        'name':[null,Validators.required],
        'email': [null, Validators.compose([Validators.required,Validators.email])],
        'phone':[null,Validators.required],
        'linkedIn':[null,Validators.required],
        'file':[null],
        'validate':''
    });

   }

   addPost(post){
     console.log(post.name);
   }

  ngOnInit(): void {
  }

}
