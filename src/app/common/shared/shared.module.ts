import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { MaterialModule } from "src/app/material/material.module";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "../footer/footer.component";
import { SocialBandComponent } from "../social-band/social-band.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ChatbubbleComponent } from "../chatbubble/chatbubble.component";
import { ChatbotComponent } from "../chatbot/chatbot.component";
import { FormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialBandComponent,
    ChatbubbleComponent,
    ChatbotComponent,
  ],
  imports: [
    // CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialBandComponent,
    ChatbubbleComponent,
    ChatbotComponent,
  ],
})
export class SharedModule {}
