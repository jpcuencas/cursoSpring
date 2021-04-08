import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LenguageSelectorComponent } from './lenguage-selector/lenguage-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LenguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
