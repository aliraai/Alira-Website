import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobPostRoutingModule } from "./job-post-routing.module";
import { MaterialModule } from "src/app/material/material.module";
import { JobPostComponent } from "./job-post.component";
import { CandidateFormComponent } from "./candidate-form/candidate-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [JobPostComponent, CandidateFormComponent],
  imports: [
    CommonModule,
    JobPostRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class JobPostModule {}
