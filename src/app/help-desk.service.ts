import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IHelpDesk {
  id: number;
  question: string;
  solution: string[];
  intro: string;
  header?: string;
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: "root",
})
export class HelpDeskService {
  helpDeskArray: IHelpDesk[] = [
    {
      id: 1,
      question: "Dynamic Questions",
      solution: [
        "Dynamic Questions",
        "blah blah blah",
        "Terminal will be reused by tasks, press any key to close it",
      ],
      intro: "This is the intro to Dynamic Questions",
      header: "Getting Started",
    },
    {
      id: generateId(),
      question: "URL Based Flow",
      solution: [
        "URL Based Flow",
        "blah blah blah",
        "Terminal will be reused by tasks, press any key to close it",
      ],
      intro: "This is the intro to Dynamic Questions",
      header: "Getting Started",
    },
    {
      id: generateId(),
      question: "Appointment Booking Setup",
      solution: [
        "Appointment Booking Setup",
        "blah blah blah",
        "Terminal will be reused by tasks, press any key to close it",
      ],
      intro: "This is the intro to Dynamic Questions",
      header: "Getting Started",
    },
    {
      id: generateId(),
      question: "Static Questions",
      solution: [
        "Static Questions",
        "blah blah blah",
        "Terminal will be reused by tasks, press any key to close it",
      ],
      intro: "This is the intro to Dynamic Questions",
      header: "Question Types",
    },
    {
      id: generateId(),
      question: "Facebook Integration",
      solution: [
        "Facebook Integration",
        "blah blah blah",
        "Terminal will be reused by tasks, press any key to close it",
      ],
      intro: "This is the intro to Dynamic Questions",
      header: "Integration",
    },
  ];
  helpDeskArray$ = new BehaviorSubject<IHelpDesk[]>(this.helpDeskArray);
  constructor() {}
  getSolution(id) {
    const index = this.helpDeskArray.findIndex((b) => b.id === +id);
    return this.helpDeskArray[index];
  }
  getHeaders() {
    return ["Question Types", "Integration", "Getting Started"];
  }
}
