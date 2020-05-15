import { Component, OnInit } from "@angular/core";
import { Iblog } from "../blog.model";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blog: Iblog[] = [
    {
      id: 1,
      title: "All you want to know about industrial laws",
      content: "content1",
      date: new Date("1/1/2020"),
      slug: "blog1",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      author: "admin",
    },
    {
      id: 2,
      title: "blog2",
      content: "content2",
      date: new Date("2/2/2020"),
      slug: "blog2",
      excerpt: "content2",
      author: "admin",
    },
    {
      id: 2,
      title: "blog2",
      content: "content2",
      date: new Date("2/2/2020"),
      slug: "blog2",
      excerpt: "content2",
      author: "admin",
    },
    {
      id: 2,
      title: "blog2",
      content: "content2",
      date: new Date("2/2/2020"),
      slug: "blog2",
      excerpt: "content2",
      author: "admin",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
