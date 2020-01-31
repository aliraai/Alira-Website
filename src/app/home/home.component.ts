import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'button-toggle-app';

  toggleOptions: Array<String> = ["Get Demo", "Get Started"];
  constructor() { }

  ngOnInit() {
  }

}
