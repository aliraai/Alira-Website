import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CareerService } from "src/app/career.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-job-post",
  templateUrl: "./job-post.component.html",
  styleUrls: ["./job-post.component.scss"],
})
export class JobPostComponent implements OnInit {
  post;
  //form
  rForm: FormGroup;
  job: any;
  name: string = "";
  email: string = "";
  phone: string = "";
  linkedIn: string = "";

  constructor(
    private route: ActivatedRoute,
    private careerService: CareerService,
    private fb: FormBuilder
  ) {
    this.rForm = fb.group({
      name: [null, Validators.required],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phone: [null, Validators.required],
      linkedIn: [null, Validators.required],
      file: [null],
      validate: "",
    });
  }
  addPost(job) {
    console.log(job.name);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log("params received: ", params);
      this.post = this.careerService.getJob(params.id);
      // console.log(this.post);
    });
  }
}
