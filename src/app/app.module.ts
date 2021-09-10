import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatButtonModule,
  MatListModule,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
  ],
  exports: [
    ...MATERIAL_MODULES,
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
