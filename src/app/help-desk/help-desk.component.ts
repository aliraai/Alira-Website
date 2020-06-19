import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HelpDeskService, IHelpDesk } from "../help-desk.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-help-desk",
  templateUrl: "./help-desk.component.html",
  styleUrls: ["./help-desk.component.scss"],
})
export class HelpDeskComponent implements OnInit {
  helpDesk$: Observable<IHelpDesk[]> = this.helpDeskService.helpDeskArray$;
  helpDesk;
  headers = this.helpDeskService.getHeaders();
  flag = false;

  constructor(
    private route: ActivatedRoute,
    private helpDeskService: HelpDeskService
  ) {}

  ngOnInit() {
    this.flag = false;
    this.route.params.subscribe((params) => {
      if (Object.keys(params).length === 0) {
        //console.log("true"); // there is no parameter
        this.flag = false;
      } else {
        //console.log("false");
        this.flag = true;
        console.log(params);
        this.helpDesk = this.helpDeskService.getSolution(params.id);
        console.log(this.helpDesk);
      }
      // if (params.size != 0) {
      //   this.flag = true;
      //   console.log(params);
      //   this.helpDesk = this.helpDeskService.getSolution(params.id);
      //   console.log(this.helpDesk);
      // }
    });
  }
  trackById(index, item) {
    return item.id;
  }
}
