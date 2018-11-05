import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { LayoutModule } from '@angular/cdk/layout';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { ProjectComponent } from './home/project/project.component';
import { PcardComponent } from './home/project/pcard/pcard.component';
import { ExperiencesComponent } from './home/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MainnavComponent,
    ProjectComponent,
    PcardComponent,
    ExperiencesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, LayoutModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  ngAfterViewInit(){

  }
}
