import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrolling: boolean;
  constructor() {
      this.scrolling = false;
    }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
   // console.log($event['Window']);
    console.log("scrolling");
    let pos = document.documentElement.scrollTop;
    console.log("**************************");
    console.log(pos);
    console.log("**************************");
    if(pos<30){
      this.scrolling=false;
      console.log(this.scrolling);

    }
    if(!this.scrolling) {
      this.scrolling = true;
    }
    
 }
  ngOnInit() {
  }

}
