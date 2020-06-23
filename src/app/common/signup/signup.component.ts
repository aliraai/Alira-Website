import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { MAT_STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
  providers: [
    {
      provide: MAT_STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class SignupComponent implements OnInit {
  interests = [];

  formGroup = new FormGroup({ secondCtrl: new FormControl("") });
  ngOnInit() {
    this.interests = [
      { value: "reading", viewValue: "Reading" },
      { value: "swimming", viewValue: "Swimming" },
      { value: "cycling", viewValue: "Cycling" },
    ];
  }
}
