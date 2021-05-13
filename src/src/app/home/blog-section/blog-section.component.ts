import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {
  name="Rodney";
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
    return{'container':this.isSmallContiner==false,
           'container_xs':this.isSmallContiner==true};
  }
  getWidth(){
    return{'child_xs':this.isSmallContiner==true,
            'child':this.isSmallContiner==false};
  }
}