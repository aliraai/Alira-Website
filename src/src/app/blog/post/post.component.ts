import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogService } from "src/app/blog.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // console.log("params received : ");
      // console.log(params.id);
      this.post = this.blogsService.getPost(params.id);
      console.log(this.post);
    });
  }
}
