import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MiscComponent } from './content/misc/misc.component';
import { ArenaComponent } from './content/arena/arena.component';
import { SlpComponent } from './content/slp/slp.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { ArenaDialogComponent } from './content/arena/arena-dialog/arena-dialog.component';
import { SlpDialogComponent } from './content/slp/slp-dialog/slp-dialog.component';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatButtonModule,
  MatListModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    MiscComponent,
    ArenaComponent,
    SlpComponent,
    ArenaDialogComponent,
    SlpDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
  ],
  exports: [
    ...MATERIAL_MODULES,
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
