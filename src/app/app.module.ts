import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SketchComponent } from './sketch/sketch.component';
import { ChoicesMenuComponent } from './choices-menu/choices-menu.component';
import { HairComponent } from './choices-menu/hair/hair.component';

@NgModule({
  declarations: [
    AppComponent,
    SketchComponent,
    ChoicesMenuComponent,
    HairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
