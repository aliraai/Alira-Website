import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HelpDeskRoutingModule } from "./help-desk-routing.module";
import { HelpDeskComponent } from "./help-desk.component";
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
  declarations: [HelpDeskComponent],
  imports: [CommonModule, HelpDeskRoutingModule, MaterialModule],
})
export class HelpDeskModule {}
