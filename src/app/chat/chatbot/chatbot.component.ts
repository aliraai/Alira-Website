import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IMessage, MessageService } from "src/app/message.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-chatbot",
  templateUrl: "./chatbot.component.html",
  styleUrls: ["./chatbot.component.scss"],
})
export class ChatbotComponent implements OnInit {
  @Output() closeChatWindow = new EventEmitter();
  toSearch = true;
  search = "";
  messages$: Observable<IMessage[]> = this.messageService.message$;

  constructor(private messageService: MessageService) {
    this.messages$.forEach((ele) => {
      console.log(ele);
    });
  }
  trackById(index, item) {
    return item.id;
  }
  ngOnInit(): void {}

  clicked() {
    this.closeChatWindow.emit(false);
  }
  addMessage(message: HTMLInputElement) {
    console.log(message.value);
    message.value = "";
  }
  searchicon() {
    console.log("searching...", this.search);
    this.search = "";
  }
}
