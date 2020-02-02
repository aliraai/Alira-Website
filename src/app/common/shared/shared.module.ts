import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../footer/footer.component';
import { SocialBandComponent } from '../social-band/social-band.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent,SocialBandComponent],
  imports: [
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports:[HeaderComponent, FooterComponent,SocialBandComponent]
})
export class SharedModule { }
