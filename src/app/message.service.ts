import { Injectable } from "@angular/core";
import { Time } from "@angular/common";
import { BehaviorSubject } from "rxjs";

export class IMessage {
  id: number;
  message: string;
  userName: string;
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: "root",
})
export class MessageService {
  messages: IMessage[] = [
    {
      id: generateId(),
      message:
        "Hello, Thanks for connecting with us over messenger. How can I help you?",
      userName: "Alira",
    },
    {
      id: generateId(),
      message: "Take me there",
      userName: "guest",
    },
    {
      id: generateId(),
      message: "How did you hear about us?",
      userName: "Alira",
    },
    {
      id: generateId(),
      message: "Webinar",
      userName: "guest",
    },
  ];
  message$ = new BehaviorSubject<IMessage[]>(this.messages);
  constructor() {}
  addMessage(message: IMessage) {
    this.messages.push(message);
    // console.log(message.userName);
    if (message.userName === "guest") {
      this.sendReply(message);
    }
  }

  sendReply(message: IMessage) {
    var reply = "";
    console.log("message.message", message.message);
    switch (message.message) {
      case "hi":
        console.log("...");
        reply = "how can i help you?";
        break;
      default:
        reply = "I cannot do that at the moment";
        break;
    }
    var msg: IMessage = {
      id: generateId(),
      message: reply,
      userName: "Alira",
    };
    this.addMessage(msg);
  }
}
