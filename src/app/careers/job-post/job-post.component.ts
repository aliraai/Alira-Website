import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CareerService } from "src/app/career.service";

@Component({
  selector: "app-job-post",
  templateUrl: "./job-post.component.html",
  styleUrls: ["./job-post.component.scss"],
})
export class JobPostComponent implements OnInit {
  post;

  department = "Creative & Design at Alira";
  job = "Web Designer";
  description = `A web designer creates the look, layout, and features of a website. 
  The job involves understanding both graphic design and computer programming. 
  Once a website is created, a designer helps with maintenance and additions to the website. 
  They work with development teams or managers for keeping the site up-to-date and prioritizing 
  needs, among other tasks.`;
  responsibilities = [
    "Writing and editing content",
    "Designing webpage layout",
    "Determining technical requirements",
    "Updating websites",
    "Creating back up files",
    "Solving code problems",
  ];
  skills = [
    "HTML CSS, JAVA SCRIPT",
    "HTML5,CSS3,JQUERY,BOOTSTRAP",
    "PHOTOSHOP",
    "CORALDRAW",
    "ILLUSTRATOR",
  ];
  experience = "0 - 3yrs";
  minSalary = 15000;
  maxSalary = 20000;
  constructor(
    private route: ActivatedRoute,
    private careerService: CareerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log("params received: ", params);
    });
  }
}
