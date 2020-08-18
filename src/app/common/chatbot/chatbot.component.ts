import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-chatbot",
  templateUrl: "./chatbot.component.html",
  styleUrls: ["./chatbot.component.scss"],
})
export class ChatbotComponent implements OnInit {
  @Output() closeChatWindow = new EventEmitter();
  toSearch = true;
  constructor() {}

  ngOnInit(): void {}

  clicked() {
    this.closeChatWindow.emit(false);
  }
  addMessage(message: HTMLInputElement) {
    console.log(message.value);
    message.value = "";
  }
  searchicon() {
    this.toSearch = !this.toSearch;
  }
}
