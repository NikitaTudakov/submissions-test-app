import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { SubmissionListComponent } from './components/submission-list/submission-list.component';
import { NotImpementedComponent } from './not-impemented/not-impemented.component';
import { SubmissionMapComponent } from './components/submission-map/submission-map.component';

import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        SubmissionsComponent,
        GoogleMapComponent,
        SubmissionListComponent,
        NotImpementedComponent,
        SubmissionMapComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
