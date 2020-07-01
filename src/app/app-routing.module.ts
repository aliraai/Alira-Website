import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PatnersComponent } from "./patners/patners.component";
import { AppComponent } from "./app.component";
import { PricingComponent } from "./pricing/pricing.component";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { CareersComponent } from "./careers/careers.component";
import { FaqComponent } from "./faq/faq.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HelpDeskComponent } from "./help-desk/help-desk.component";
import { SignupComponent } from "./authentication/signup/signup.component";
import { SigninComponent } from "./authentication/signin/signin.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "patners", component: PatnersComponent },
  { path: "pricing", component: PricingComponent },
  { path: "blog", component: BlogComponent },
  {
    path: "post/:id/:slug",
    loadChildren: () =>
      import("./blog/post/post.module").then((m) => m.PostModule),
    data: { routeState: 3 },
  },
  { path: "contact", component: ContactComponent },
  { path: "careers", component: CareersComponent },
  {
    path: "job-post/:id",
    loadChildren: () =>
      import("./careers/job-post/job-post.module").then((m) => m.JobPostModule),
    // data: { routeState: 3 },
  },
  { path: "faq", component: FaqComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "help-desk", component: HelpDeskComponent },
  {
    path: "help-desk/:id/:question",
    loadChildren: () =>
      import("./help-desk/help-desk.module").then((m) => m.HelpDeskModule),
    data: { routeState: 3 },
  },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  { path: "**", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
