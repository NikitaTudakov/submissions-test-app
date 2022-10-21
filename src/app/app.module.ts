import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { SubmissionListComponent } from './components/submission-list/submission-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SubmissionsComponent,
    GoogleMapComponent,
    SubmissionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
