import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-chatbubble",
  templateUrl: "./chatbubble.component.html",
  styleUrls: ["./chatbubble.component.scss"],
})
export class ChatbubbleComponent implements OnInit {
  @Output() showChatWindow = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clicked() {
    console.log("inside clicked of chatbubble");
    this.showChatWindow.emit(true);
  }
}
