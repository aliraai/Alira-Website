interface PricingTableInterface {
    plan: string;
    free: string;
    starter: string;
    pro: string;
    enterprise: string;
  }
  export const DATA: PricingTableInterface[] = [
      {plan:"Solution", free:"SaaS", starter:"SaaS", pro:"SaaS", enterprise:"SaaS/ License on cloud/ on-premise"},
      {plan:"Bots & Chats", free:"", starter:"", pro:"", enterprise:""},
      {plan:"Number of Bots", free:"1", starter:"5", pro:"10", enterprise:"Unlimited"},
      {plan:"Number of Chats", free:"100/month", starter:"1000/month", pro:"5000/month", enterprise:"Unlimited"}
  ]
export class PricingTable{
    
}

