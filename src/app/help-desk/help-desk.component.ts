import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-help-desk",
  templateUrl: "./help-desk.component.html",
  styleUrls: ["./help-desk.component.scss"],
})
export class HelpDeskComponent implements OnInit {
  display = "default";

  constructor() {}

  ngOnInit() {}
  changeValue() {
    this.display = "value changed";
  }
}
