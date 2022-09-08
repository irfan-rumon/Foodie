import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';



const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule,
  MatCardModule,
  FlexLayoutModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule
  
]

@NgModule({
  
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
