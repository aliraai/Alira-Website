import { Injectable } from "@angular/core";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  plan?: string;
  cost?: number;
  time?: string;
  patnerType?: string;
  companyName: string;
  websiteURL: string;
  contactNo: string;
}

function generateId() {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  users: IUser[];
  constructor() {}
  addUser(user) {
    // this.users.push(user);
    console.log(
      "----------------------------Inside User Service --------------------"
    );
    console.log(user);
  }
}
