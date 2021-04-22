import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaddyComponent } from './paddy/paddy.component';
import { MaizeComponent } from './maize/maize.component';
import { JowarComponent } from './jowar/jowar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BajraComponent } from './bajra/bajra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaddyComponent,
    MaizeComponent,
    JowarComponent,
    PagenotfoundComponent,
    BajraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
