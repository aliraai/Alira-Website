import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostRoutingModule } from "./post-routing.module";
import { PostComponent } from "./post.component";
import { MaterialModule } from "src/app/material/material.module";
// import { SocialBandComponent } from "src/app/common/social-band/social-band.component";

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostRoutingModule, MaterialModule],
})
export class PostModule {}
