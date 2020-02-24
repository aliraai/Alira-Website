import { Component, OnInit } from '@angular/core';

interface FaqContent{
  question:string;
  answer:string;
}

const CONTENT:FaqContent[] = [
  {question:'What does chat mean?',answer:`One chat is one unique user interaction with the 
  chatbot, so more or less 1000 chats mean 1000 unique users can interact with the chatbot.`},
  {question:'Do I need to know how to code?', answer:`Nope, using Alira platform one can easily 
  build a chatbot with few clicks and no coding knowledge.`},
  {question:'What if I want more Bots/Chats in my plan?',answer:`You can always contact us at 
  info@smatbot.com regarding any sort of custom requirements which are not in your plan or you can subscribe to our enterprise plan for custom solutions.`},
  {question:'What integrations does Alira have?',answer:`SmatBot can be integrated with Zapier, 
  Google Sheets and Tawk.to. SmatBot is also integrated with 5+ CRMs and more under development.`},
  {question:'How does live chat(tawk.to) integration work?',answer:`Whenever an agent is offline 
  in tawk.to. SmatBot will pop up in place of tawk.to and start interacting with your visitors`},
  {question:'How does WhatsApp integration work?',answer:`You can redirect your website visitors 
  to DM (Direct Message) you with a default message directly from SmatBot with a single click.`},
  {question:'What does dynamic question type mean?',answer:`Bot can fetch the response from 
  external sources like your own backend or 3rd party APIs to show dynamic data. Use cases 
  include Order tracking, Employee leaves left etc.`},
  {question:'Can I change my plan later?',answer:`Yes, Once your current plan is expired 
  you can upgrade or downgrade as you wish. Although, if you wish to change before your 
  current plan is expired, your previous plan will be revoked and you will be put in a new plan.
  You can also contact us at info@alira.ai for custom pricing solutions.`},
  {question:'What is your refund policy?',answer:`Currently, we don’t offer any refunds as we have
  a FREE trial to see the bot performance before subscribing to the paid plan.`},
  {question:'What do I do if I have more questions?',answer:`Drop a mail to info@smatbot.com 
  with your questions and our team will get back to you by the time you finish your coffee.`}
]

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faq1 = CONTENT.slice(0,5);
  faq2 = CONTENT.slice(5);
  constructor() {
    console.log(this.faq1[0].question + "\t"+ this.faq1[0].answer);

   }

  ngOnInit() {
    
  }

}
