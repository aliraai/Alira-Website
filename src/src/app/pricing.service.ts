import { Injectable } from "@angular/core";

export class PricingTable {
  subscribtionTime: string;
  plan: string;
  costINR: string;
  costUSD: string;
  noOfBots: string;
  noOfChats: number;
  features?: string[];
}

@Injectable({
  providedIn: "root",
})
export class PricingService {
  pricingData: PricingTable[] = [
    {
      subscribtionTime: "monthly",
      plan: "free",
      costINR: "0",
      costUSD: "0",
      noOfBots: "1",
      noOfChats: 100,
    },
    {
      subscribtionTime: "monthly",
      plan: "starter",
      costINR: "5500",
      costUSD: "25.12",
      noOfBots: "5",
      noOfChats: 100,
    },
    {
      subscribtionTime: "monthly",
      plan: "premier",
      costINR: "1800",
      costUSD: "76.74",
      noOfBots: "10",
      noOfChats: 500,
    },
    {
      subscribtionTime: "monthly",
      plan: "enterprise",
      costINR: "custom",
      costUSD: "custom",
      noOfBots: "unlimited",
      noOfChats: 500,
    },
    {
      subscribtionTime: "6months",
      plan: "free",
      costINR: "0",
      costUSD: "0",
      noOfBots: "1",
      noOfChats: 100,
    },
    {
      subscribtionTime: "6months",
      plan: "starter",
      costINR: "1600",
      costUSD: "22.32",
      noOfBots: "5",
      noOfChats: 100,
    },
    {
      subscribtionTime: "6months",
      plan: "premier",
      costINR: "5000",
      costUSD: "69.76",
      noOfBots: "10",
      noOfChats: 500,
    },
    {
      subscribtionTime: "6months",
      plan: "enterprise",
      costINR: "custom",
      costUSD: "custom",
      noOfBots: "unlimited",
      noOfChats: 500,
    },
    {
      subscribtionTime: "yearly",
      plan: "free",
      costINR: "0",
      costUSD: "0",
      noOfBots: "1",
      noOfChats: 100,
    },
    {
      subscribtionTime: "yearly",
      plan: "starter",
      costINR: "1400",
      costUSD: "19.53",
      noOfBots: "5",
      noOfChats: 100,
    },
    {
      subscribtionTime: "yearly",
      plan: "premier",
      costINR: "4700",
      costUSD: "65.58",
      noOfBots: "10",
      noOfChats: 500,
    },
    {
      subscribtionTime: "monthly",
      plan: "enterprise",
      costINR: "custom",
      costUSD: "custom",
      noOfBots: "unlimited",
      noOfChats: 500,
    },
  ];
  constructor() {}
  getCost(subscribtionTime, plan) {
    console.log("inside getcost()");
    console.log("subscribtionTime-", subscribtionTime, "\nplan", plan);
    var cost;
    var i = 1;
    this.pricingData.forEach((ele) => {
      if (ele.subscribtionTime === subscribtionTime && ele.plan === plan) {
        cost = { costINR: ele.costINR, costUSD: ele.costUSD };
      }
    });
    return cost;
  }
}
