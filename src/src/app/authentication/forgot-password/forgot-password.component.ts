import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  email;
  constructor(public dialogRef: MatDialogRef<ForgotPasswordComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendMail(): void {
    alert(this.email);
    this.onNoClick();
  }
  ngOnInit(): void {}
}
