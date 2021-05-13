import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService, IUser } from "src/app/user.service";
import { PricingService } from "src/app/pricing.service";

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  from = "default";
  price;
  period;
  type;
  selectedPlan;
  selectedPeriod = "none";
  profileForm: FormGroup;
  typeForm: FormGroup;
  companyForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private pricingService: PricingService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
    this.typeForm = this.fb.group({
      type: ["", Validators.required],
      time: [""],
    });
    this.companyForm = this.fb.group({
      companyName: ["", Validators.required],
      websiteUrl: ["", Validators.required],
      contactNo: ["", [Validators.required, Validators.pattern("[0-9]*")]],
    });
    this.activatedRoute.paramMap.subscribe(() => {
      const state = window.history.state;
      if (state.from === "nav-bar") {
        this.from = "nav-bar";
      } else if (state.from === "pricing") {
        this.from = state.from;
        this.price = state.price;
        this.period = state.period;
        this.typeForm.get("type").setValue(this.price);
        this.selectedPlan = this.price;
        this.typeForm.get("time").setValue(this.period);
        this.selectedPeriod = this.period;
      } else if (state.from === "patners") {
        this.from = state.from;
        this.type = state.type;
        this.typeForm.get("type").setValue(this.type);
        this.selectedPlan = this.type;
      }
    });
  }

  submit() {
    console.log("form submitted");
    var user: IUser = {
      id: generateId(),
      name: this.profileForm.get("name").value,
      email: this.profileForm.get("email").value,
      password: this.profileForm.get("password").value,
      companyName: this.companyForm.get("companyName").value,
      websiteURL: this.companyForm.get("websiteUrl").value,
      contactNo: this.companyForm.get("contactNo").value,
    };
    if (this.from == "patners") {
      user.patnerType = this.typeForm.get("type").value;
    } else {
      var cost = this.pricingService.getCost(
        this.typeForm.get("time").value,
        this.typeForm.get("type").value
      );
      user.plan = this.typeForm.get("type").value;
      user.cost = cost.costINR;
      user.time = this.typeForm.get("time").value;
    }
    this.userService.addUser(user);
  }
}
