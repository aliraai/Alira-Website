import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { PatnersComponent } from "./patners/patners.component";
import { PricingComponent } from "./pricing/pricing.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { CareersComponent } from "./careers/careers.component";
import { FaqComponent } from "./faq/faq.component";
// import { HelpDeskComponent } from "./help-desk/help-desk.component";
import { EventsComponent } from "./events/events.component";
import { SearchComponent } from "./search/search.component";
import { MaterialModule } from "./material/material.module";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "./common/shared/shared.module";
import { FormComponent } from "./contact/form/form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PricingTableComponent } from "./pricing/pricing-table/pricing-table.component";
import { BlogSectionComponent } from "./home/blog-section/blog-section.component";
import { ArticleSectionComponent } from "./home/article-section/article-section.component";
import { SocialSectionComponent } from "./home/social-section/social-section.component";
import { HeaderSectionComponent } from "./home/header-section/header-section.component";
import { ProductSectionComponent } from "./home/product-section/product-section.component";
import { ProjectSectionComponent } from "./home/project-section/project-section.component";
import { PlanTableComponent } from "./pricing/plan-table/plan-table.component";
// import { JobPostComponent } from "./careers/job-post/job-post.component";
// import { CandidateFormComponent } from "./careers/job-post/candidate-form/candidate-form.component";
import { AboutUsComponent } from "./about-us/about-us.component";

@NgModule({
  declarations: [
    AppComponent,
    PatnersComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    CareersComponent,
    FaqComponent,
    // HelpDeskComponent,
    EventsComponent,
    SearchComponent,
    HomeComponent,
    FormComponent,
    PricingTableComponent,
    BlogSectionComponent,
    ArticleSectionComponent,
    SocialSectionComponent,
    HeaderSectionComponent,
    ProductSectionComponent,
    ProjectSectionComponent,
    PlanTableComponent,
    // JobPostComponent,
    // CandidateFormComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
