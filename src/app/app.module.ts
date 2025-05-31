import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComHomeComponent } from './home/com-home/com-home.component';
import { ComMenuComponent } from './menu/com-menu/com-menu.component';
import { ComBielaRusaComponent } from './games/com-biela-rusa/com-biela-rusa.component';

@NgModule({
  declarations: [
    AppComponent,
    ComHomeComponent,
    ComMenuComponent,
    ComBielaRusaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
