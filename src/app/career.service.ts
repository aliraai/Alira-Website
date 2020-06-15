import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IJob {
  id: number;
  designation: string;
  department: string;
  opening: number;
  minSalary: number;
  maxSalary: number;
  active: boolean;
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
      id: generateId(),
      designation: "Jr. Java Developer",
      department: "IT",
      opening: 4,
      minSalary: 15000,
      maxSalary: 20000,
      active: true,
    },
    {
      id: generateId(),
      designation: "Marketing Manager",
      department: "Marketing",
      opening: 1,
      minSalary: 50000,
      maxSalary: 75000,
      active: true,
    },
    {
      id: generateId(),
      designation: "Sales Executives",
      department: "Sales",
      opening: 2,
      minSalary: 15000,
      maxSalary: 20000,
      active: true,
    },
    {
      id: generateId(),
      designation: "UX designer",
      department: "IT",
      opening: 2,
      minSalary: 12000,
      maxSalary: 25000,
      active: true,
    },
    {
      id: generateId(),
      designation: "Project Manager",
      department: "IT",
      opening: 0,
      minSalary: 30000,
      maxSalary: 50000,
      active: false,
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
