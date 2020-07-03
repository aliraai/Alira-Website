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
  users: IUser[] = [
    {
      id: generateId(),
      name: "Harry Potter",
      email: "harry@gmail.com",
      password: "ginny@2020",
      plan: "free",
      cost: 0,
      time: "monthly",
      companyName: "Lily James",
      websiteURL: "lilyJames.com",
      contactNo: "+91987654321",
    },
  ];
  constructor() {}
  addUser(user: IUser) {
    this.users.push(user);

    console.log(typeof user);
    console.log(
      "----------------------------Inside User Service --------------------"
    );
    console.log(user);
    this.displayUsers();
  }
  displayUsers() {
    this.users.forEach((ele) => {
      console.log(ele.name);
    });
  }
  checkUser(email, password): boolean {
    var status = false;
    this.users.forEach((user) => {
      if (user.email === email && user.password === password) {
        status = true;
      }
    });
    return status;
  }
}
