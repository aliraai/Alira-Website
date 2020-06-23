import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IJob {
  id: number;
  designation: string;
  department: string;
  responsibilities: string[];
  skills: string[];
  opening: number;
  minSalary: number;
  maxSalary: number;
  minExperience: number;
  maxExperience: number;
  active: boolean;
  description: string;
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: "root",
})
export class CareerService {
  jobs: IJob[] = [
    {
      id: 1,
      designation: "Jr. Java Developer",
      department: "IT",
      responsibilities: [
        "Writing and editing content",
        "Designing webpage layout",
        "Determining technical requirements",
        "Updating websites",
        "Creating back up files",
        "Solving code problems",
      ],
      skills: [
        "HTML CSS, JAVA SCRIPT",
        "HTML5,CSS3,JQUERY,BOOTSTRAP",
        "PHOTOSHOP",
        "CORALDRAW",
        "ILLUSTRATOR",
      ],
      minExperience: 0,
      maxExperience: 1,
      opening: 4,
      minSalary: 15000,
      maxSalary: 20000,
      active: true,
      description: `A web designer creates the look, layout, and features of a website. 
      The job involves understanding both graphic design and computer programming. 
      Once a website is created, a designer helps with maintenance and additions to the website. 
      They work with development teams or managers for keeping the site up-to-date and prioritizing 
      needs, among other tasks.`,
    },
    {
      id: generateId(),
      designation: "Marketing Manager",
      department: "Marketing",
      responsibilities: [
        "Writing and editing content",
        "Designing webpage layout",
        "Determining technical requirements",
        "Updating websites",
        "Creating back up files",
        "Solving code problems",
      ],
      skills: [
        "HTML CSS, JAVA SCRIPT",
        "HTML5,CSS3,JQUERY,BOOTSTRAP",
        "PHOTOSHOP",
        "CORALDRAW",
        "ILLUSTRATOR",
      ],
      minExperience: 0,
      maxExperience: 1,
      opening: 1,
      minSalary: 50000,
      maxSalary: 75000,
      active: true,
      description: `A web designer creates the look, layout, and features of a website. 
      The job involves understanding both graphic design and computer programming. 
      Once a website is created, a designer helps with maintenance and additions to the website. 
      They work with development teams or managers for keeping the site up-to-date and prioritizing 
      needs, among other tasks.`,
    },
    {
      id: generateId(),
      designation: "Sales Executives",
      department: "Sales",
      responsibilities: [
        "Writing and editing content",
        "Designing webpage layout",
        "Determining technical requirements",
        "Updating websites",
        "Creating back up files",
        "Solving code problems",
      ],
      skills: [
        "HTML CSS, JAVA SCRIPT",
        "HTML5,CSS3,JQUERY,BOOTSTRAP",
        "PHOTOSHOP",
        "CORALDRAW",
        "ILLUSTRATOR",
      ],
      minExperience: 0,
      maxExperience: 1,
      opening: 2,
      minSalary: 15000,
      maxSalary: 20000,
      active: true,
      description: `A web designer creates the look, layout, and features of a website. 
      The job involves understanding both graphic design and computer programming. 
      Once a website is created, a designer helps with maintenance and additions to the website. 
      They work with development teams or managers for keeping the site up-to-date and prioritizing 
      needs, among other tasks.`,
    },
    {
      id: generateId(),
      designation: "UX designer",
      department: "IT",
      responsibilities: [
        "Writing and editing content",
        "Designing webpage layout",
        "Determining technical requirements",
        "Updating websites",
        "Creating back up files",
        "Solving code problems",
      ],
      minExperience: 0,
      maxExperience: 1,
      skills: [
        "HTML CSS, JAVA SCRIPT",
        "HTML5,CSS3,JQUERY,BOOTSTRAP",
        "PHOTOSHOP",
        "CORALDRAW",
        "ILLUSTRATOR",
      ],
      opening: 2,
      minSalary: 12000,
      maxSalary: 25000,
      active: true,
      description: `A web designer creates the look, layout, and features of a website. 
      The job involves understanding both graphic design and computer programming. 
      Once a website is created, a designer helps with maintenance and additions to the website. 
      They work with development teams or managers for keeping the site up-to-date and prioritizing 
      needs, among other tasks.`,
    },
    {
      id: generateId(),
      designation: "Project Manager",
      department: "IT",
      responsibilities: [
        "Writing and editing content",
        "Designing webpage layout",
        "Determining technical requirements",
        "Updating websites",
        "Creating back up files",
        "Solving code problems",
      ],
      skills: [
        "HTML CSS, JAVA SCRIPT",
        "HTML5,CSS3,JQUERY,BOOTSTRAP",
        "PHOTOSHOP",
        "CORALDRAW",
        "ILLUSTRATOR",
      ],
      minExperience: 0,
      maxExperience: 1,
      opening: 0,
      minSalary: 30000,
      maxSalary: 50000,
      active: false,
      description: `A web designer creates the look, layout, and features of a website. 
      The job involves understanding both graphic design and computer programming. 
      Once a website is created, a designer helps with maintenance and additions to the website. 
      They work with development teams or managers for keeping the site up-to-date and prioritizing 
      needs, among other tasks.`,
    },
  ];
  jobs$ = new BehaviorSubject<IJob[]>(this.jobs);
  getJob(id) {
    const index = this.jobs.findIndex((b) => b.id === +id);
    return this.jobs[index];
  }
  getDepartment() {
    return ["IT", "Sales", "Marketing"];
  }
  constructor() {}
}
