import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatnersComponent } from './patners/patners.component';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'patners', component: PatnersComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'careers', component: CareersComponent},
  {path: '**',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
