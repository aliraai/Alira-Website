import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ElementRef,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  scrolling: boolean;
  path = "../../../assets/img/logo/alira_logo.png";
  constructor(public router: Router) {
    this.scrolling = false;
  }
  pos: any;
  @HostListener("window:scroll", ["$event"]) onScrollEvent($event) {
    this.pos = document.documentElement.scrollTop;
    // console.log(this.pos);
  }
  ngOnInit() {}
  getClass() {
    if (this.pos > 0) {
      this.scrolling = true;
      this.path = "../../../assets/img/logo/alira_logo_black.png";
    } else {
      this.scrolling = false;
      this.path = "../../../assets/img/logo/alira_logo.png";
    }
    return { hdr: !this.scrolling, hdrScroll: this.scrolling };
  }
  navigateToSignUpPage() {
    this.router.navigateByUrl("/signup", { state: { from: "nav-bar" } });
  }
}
