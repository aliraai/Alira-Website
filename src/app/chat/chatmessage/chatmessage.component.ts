import { Component, OnInit, Input } from "@angular/core";
import { IMessage, MessageService } from "src/app/message.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-chatmessage",
  templateUrl: "./chatmessage.component.html",
  styleUrls: ["./chatmessage.component.scss"],
})
export class ChatmessageComponent implements OnInit {
  messages$: Observable<IMessage[]> = this.messageService.message$;

  constructor(private messageService: MessageService) {}
  trackById(index, item) {
    return item.id;
  }
  ngOnInit(): void {}
}
