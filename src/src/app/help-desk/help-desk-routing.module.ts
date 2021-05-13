import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelpDeskComponent } from "./help-desk.component";

const routes: Routes = [
  {
    path: "",
    component: HelpDeskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpDeskRoutingModule {}
