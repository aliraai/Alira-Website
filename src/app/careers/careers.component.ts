import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IJob, CareerService } from "../career.service";

@Component({
  selector: "app-careers",
  templateUrl: "./careers.component.html",
  styleUrls: ["./careers.component.scss"],
})
export class CareersComponent implements OnInit {
  jobs$: Observable<IJob[]> = this.careerService.jobs$;
  department = this.careerService.getDepartment();
  constructor(private careerService: CareerService) {}

  trackById(index, item) {
    return item.id;
  }
  ngOnInit() {}
}
