import { Component, OnInit } from "@angular/core";
import { ErrorStateMatcher } from "@angular/material";
import {
  FormControl,
  FormGroupDirective,
  Validators,
  NgForm,
} from "@angular/forms";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl("", Validators.required);
  passwordFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(10),
    Validators.pattern("[a-zA-Z0-9]*_"),
  ]);
  officeNumberFormControl = new FormControl("", Validators.pattern("[0-9]*"));
  mobileNumberFormControl = new FormControl("", Validators.pattern("[0-9]*"));
  matcher = new MyErrorStateMatcher();
  selected = "Free";
  favoriteSeason: string;
  seasons: string[] = ["Monthly", "6 Months", "Yearly"];

  ngOnInit() {}
}
