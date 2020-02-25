import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { MaterialFileInputModule } from 'ngx-material-file-input';

// import { MatFileUploadModule } from 'angular-material-fileupload';
const material=[
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatGridListModule,MatCardModule,MatFormFieldModule,MatSelectModule,MatInputModule,
  MatButtonToggleModule, MatMenuModule, MatTableModule,MatRadioModule,MatSlideToggleModule,
  MatExpansionModule, MatChipsModule, MaterialFileInputModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
