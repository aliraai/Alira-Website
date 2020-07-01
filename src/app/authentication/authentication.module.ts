import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { MaterialModule } from "../material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
