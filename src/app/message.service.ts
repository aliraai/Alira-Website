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
      message: "Hello, I'm Alira!",
      userName: "Alira",
    },
    {
      id: generateId(),
      message: "Alira is customizable bot for all your business needs.",
      userName: "Alira",
    },
    {
      id: generateId(),
      message: "What is your name?",
      userName: "Alira",
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
    var flag = 0;
    console.log("message.message", message.message);
    var choice = message.message + "";
    if (flag == 1) {
      choice = "phone";
    }
    if (choice == "1" || choice == "2" || choice == "3") {
      console.log(typeof choice);
    }
    switch (choice) {
      case "hi":
        console.log("...");
        reply = "how can i help you?";
        break;
      case "phone":
        reply = "Enter your phone number";
      case "1":
      case "2":
      case "3":
        reply = "Nice Choice, Do you have specific requirement?";
        flag = 1;
        break;
      default:
        reply =
          "Which type of chat-bot do you need?\nKindly enter 1 - Lead Generation Chatbot\n 2 - Educational Chatbot \n 3 - AI Chatbot";
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
