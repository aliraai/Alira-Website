import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newesletter',
  templateUrl: './newesletter.component.html',
  styleUrls: ['./newesletter.component.scss']
})
export class NewesletterComponent implements OnInit {
  public results: any; // Change it private to public
  public mymessage: any;
  constructor() { }

  ngOnInit(): void {
  }

}
