import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComHomeComponent } from './home/com-home/com-home.component';
import { ComMenuComponent } from './menu/com-menu/com-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ComHomeComponent,
    ComMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
