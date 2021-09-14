import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MiscComponent } from './content/misc/misc.component';
import { ArenaComponent } from './content/arena/arena.component';
import { SlpComponent } from './content/slp/slp.component';
import { ArenaDialogComponent } from './content/arena/arena-dialog/arena-dialog.component';
import { SlpDialogComponent } from './content/slp/slp-dialog/slp-dialog.component';

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
import {MatCardModule} from '@angular/material/card';

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
  MatCardModule,
];

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBnIQ3Tqg5SAAUEH9plz7H0MIQEZYmBHNY",
  authDomain: "axie-metrics.firebaseapp.com",
  projectId: "axie-metrics",
  storageBucket: "axie-metrics.appspot.com",
  messagingSenderId: "885041614160",
  appId: "1:885041614160:web:86c3e2d2bced424847b055",
  measurementId: "G-P639SJ4SSK"
};

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
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    ...MATERIAL_MODULES,
  ],
  exports: [
    ...MATERIAL_MODULES,
  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
