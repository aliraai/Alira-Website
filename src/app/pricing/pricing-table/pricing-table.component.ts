import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';

export interface Plans{
  plan:string;
  free:string;
  starter:string;
  pro:string;
  enterprise:string;
}

const TABLE_DATA: Plans[]=[
  {plan:'Solution',free:'SaaS',starter:'SaaS',pro:'SaaS',enterprise:'SaaS/License on cloud/on-premise'},
  {plan:'',free:'',starter:'Bots & Chats',pro:'',enterprise:''},
  {plan:'Number of Bots',free:'1',starter:'5',pro:'10',enterprise:'Unlimited'},
  {plan:'Number of Chats',free:'100/month',starter:'1000/month',pro:'5000/month',enterprise:'Unlimited'},
  {plan:'',free:'',starter:'Creation',pro:'',enterprise:''},
  {plan:'Rich Media Output',free:'yes',starter:'yes',pro:'yes',enterprise:'yes'},
  {plan:'Inbuilt Data Validation',free:'yes',starter:'yes',pro:'yes',enterprise:'yes'},
  {plan:'Logical Branching',free:'yes',starter:'yes',pro:'yes',enterprise:'yes'},
  {plan:'Dynamic Response',free:'no',starter:'no',pro:'yes',enterprise:'yes'},
]

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent implements OnInit {
  Columns:string[] = ['Plans','Free','Starter','Pro','Enterprise'];
  dataSource = TABLE_DATA
  watcher:Subscription;
  activeMediaQuery = '';
  a='';
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

  getWidth(){
    return{'setWidth':this.isSmallContiner==false,
            'setWidth_xs':this.isSmallContiner==true};
  }
  check(val){
    if(val!="yes" && val!="no"){
      console.log(val);
      return true;
    }
  }
  checkNo(val){
    if(val=="no"){
      console.log(val);
      return true;
    }
  }
  checkYes(val){
    if(val=="yes"){
      console.log(val);
      return true;
    }
  }
  info(val){
    return val;
  }
}
