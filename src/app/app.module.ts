import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { AboutComponent } from 'src/pages/about/about.component';
import { ContactComponent } from 'src/pages/contact/contact.component';
import { FooterComponent } from 'src/pages/footer/footer.component';
import { HeaderComponent } from 'src/pages/header/header.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // Provide HashLocationStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
