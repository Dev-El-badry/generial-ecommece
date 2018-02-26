import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Install Font Awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpperHeaderComponent } from './components/header/upper-header/upper-header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { CategoriesComponent } from './components/header/categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpperHeaderComponent,
    NavbarComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
