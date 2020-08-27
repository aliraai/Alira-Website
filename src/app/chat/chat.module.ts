import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatbubbleComponent } from "./chatbubble/chatbubble.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";
import { ChatmessageComponent } from "./chatmessage/chatmessage.component";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";

import { MatLinkPreviewModule } from "@angular-material-extensions/link-preview";

@NgModule({
  declarations: [ChatbubbleComponent, ChatbotComponent, ChatmessageComponent],
  imports: [CommonModule, MaterialModule, FormsModule, MatLinkPreviewModule],
  exports: [ChatbubbleComponent, ChatbotComponent, ChatmessageComponent],
})
export class ChatModule {}
