import { Component, OnInit, OnDestroy, Pipe, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

// const 

@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html',
  styleUrls: ['./plan-table.component.scss']
})
export class PlanTableComponent implements OnInit,OnDestroy {
  Data:string[]=[
    'Multi Lang Support', 'Auto Email Follow-Up','Facebook Support','CRM Integration','Lead Notification',
    'FAQs','Retrainable AI Bot'
  ];
  currency: string;
  plan:string;
  value:boolean;
  watcher:Subscription;
  activeMediaQuery = '';
  isSmallContiner = false;
  free:number=0;
  starter:number=1800;
  premier:number=5500;
  enterprise:string="custom";

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
    // this.currency = "inr";
    this.value = true;
    this.plan="monthly";
    // this.onCurrencyChange();
  }

  ngOnDestroy(){
    this.watcher.unsubscribe();
  }
  //this function will return container class if and only if the viewport is not xs
  getContainer(){
    return{'container':this.isSmallContiner==false};
  }
  onChange(){
    // console.log(this.currency);
    let usdValue:number = 71.67;
    let p:number;
    let s:number;
    switch (this.plan) {
      case "monthly": console.log("monthly");
                      s = 1800; p = 5500
                      console.log(this.value);
                      switch (this.value) {
                        case true: this.starter = p;
                                    this.premier = s; console.log(this.value);
                                    break;
                        case false: this.starter = s/usdValue;
                                    this.premier = p/usdValue;console.log(this.value);
                                    break;
                      }
                    break;
      case "6months": console.log("6months");
                      s = 1600; p = 5000;
                      switch (this.value) {
                        case true: this.starter = s;
                                    this.premier = p;
                                    break;
                        case false: this.starter = s/usdValue;
                                    this.premier = p/usdValue;
                                    break;
                      }
     break; 
      case "yearly": console.log("yearly");
                      s = 1400; p = 4700;
                     switch (this.value) {
                        case true: this.starter = s;
                                    this.premier = p;
                                    break;
                        case false: this.starter = s/usdValue;
                                    this.premier = p/usdValue;
                                    break;
                      }
                    break; 
    }
    // if(this.currency=='inr'){
    //   
    //   
    // }else{
    //   
    //    
    // }
  }
}
