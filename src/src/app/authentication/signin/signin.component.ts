import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { ForgotPasswordComponent } from "../forgot-password/forgot-password.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  hide = true;
  animal: string;
  name: string;
  constructor(
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: "250px",
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  ngOnInit(): void {}

  login(email: HTMLInputElement, password: HTMLInputElement): boolean {
    console.log(email.value, password.value);
    var status = this.userService.checkUser(email.value, password.value);
    console.log(status);
    if (status == true) {
      this.router.navigateByUrl("/", { state: { login: "successfull" } });
    }
    return status;
  }
}
