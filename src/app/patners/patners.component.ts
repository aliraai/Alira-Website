import { Component, OnInit } from "@angular/core";
import { PatnerDetails, setPatnerDetails } from "./patner-details";
import { Router } from "@angular/router";

@Component({
  selector: "app-patners",
  templateUrl: "./patners.component.html",
  styleUrls: ["./patners.component.scss"],
})
export class PatnersComponent {
  constructor(public router: Router) {}
  navigateToSignUpPage(v) {
    console.log(v);
    this.router.navigateByUrl("/signup", {
      state: { from: "patners", type: v },
    });
  }
}
