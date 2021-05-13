import { Component, OnInit } from "@angular/core";
import { Iblog, BlogService } from "../blog.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogs$: Observable<Iblog[]> = this.blogsService.blogs$;
  recentBlogs = this.blogsService.getRecentPosts();
  constructor(private blogsService: BlogService) {
    console.log(this.recentBlogs);
  }

  trackById(index, item) {
    return item.id;
  }

  ngOnInit() {}
}
