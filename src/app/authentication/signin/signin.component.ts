import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  hide = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  login(email: HTMLInputElement, password: HTMLInputElement): boolean {
    // console.log(email.value, password.value);
    var status = this.userService.checkUser(email.value, password.value);
    return status;
  }
}
