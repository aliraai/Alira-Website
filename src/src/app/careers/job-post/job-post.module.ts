import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JobPostRoutingModule } from "./job-post-routing.module";
import { JobPostComponent } from "./job-post.component";
import { MaterialModule } from "src/app/material/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [JobPostComponent],
  imports: [
    CommonModule,
    JobPostRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class JobPostModule {}
