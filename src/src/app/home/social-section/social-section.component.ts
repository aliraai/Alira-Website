import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-social-section',
  templateUrl: './social-section.component.html',
  styleUrls: ['./social-section.component.scss']
})
export class SocialSectionComponent implements OnInit {
  watcher:Subscription;
  activeMediaQuery = '';
  isSmallContiner = false;
  constructor(mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      console.log("MediaQuery::"+change.mqAlias);
      if ( change.mqAlias == 'xs') {
         this.isSmallContiner=true;
      }
    });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.watcher.unsubscribe();
  }
  //this function will return container class if and only if the viewport is not xs
  getContainer(){
    return{'container':this.isSmallContiner==false};
  }

}
