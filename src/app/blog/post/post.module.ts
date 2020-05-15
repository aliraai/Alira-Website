import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostRoutingModule } from "./post-routing.module";
import { PostComponent } from "./post.component";
// import { SocialBandComponent } from "src/app/common/social-band/social-band.component";

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
