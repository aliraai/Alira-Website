import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { PatnersComponent } from './patners/patners.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { FaqComponent } from './faq/faq.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { EventsComponent } from './events/events.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './common/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PatnersComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent,
    CareersComponent,
    FaqComponent,
    HelpDeskComponent,
    EventsComponent,
    SearchComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
