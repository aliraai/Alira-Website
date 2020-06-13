import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Iblog {
  id: number;
  title: string;
  content: string;
  date: Date;
  slug: string;
  excerpt: string;
  author: string;
  tags?: string[];
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: "root",
})
export class BlogService {
  blogs: Iblog[] = [
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
      id: 3,
      title: "blog3",
      content: "content2",
      date: new Date("2/2/2020"),
      slug: "blog3",
      excerpt: "content2",
      author: "admin",
    },
    {
      id: 4,
      title: "blog4",
      content: "content2",
      date: new Date("2/2/2020"),
      slug: "blog4",
      excerpt: "content2",
      author: "admin",
    },
    {
      id: generateId(),
      title: "It is a long established fact a reader be distracted",
      content: `Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus
      nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem
      assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima
      esse
      vero ut ea, repudiandae suscipit!`,
      date: new Date("2/3/2020"),
      slug: "blog5",
      excerpt: "content5",
      author: "admin",
    },
  ];
  blogs$ = new BehaviorSubject<Iblog[]>(this.blogs);
  constructor() {}
  getPost(id) {
    const index = this.blogs.findIndex((b) => b.id === +id);
    // console.log(typeof id);
    return this.blogs[index];
  }
}
