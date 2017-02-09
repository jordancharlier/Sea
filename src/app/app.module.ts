import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TheprojectComponent } from './theproject/theproject.component';
import { TheteamComponent } from './theteam/theteam.component';
import { CatchComponent } from './catch/catch.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { routes } from './app.router';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from './auth.service';
import { config } from '../environments/firebase.config';

import { requestOptionsProvider } from './services/default-request-options.service';
import { SeaData } from './services/sea-data';
import { SelectStationComponent } from './select-station/select-station.component';
import { FormulaireModule } from './forms/forms.module';

@NgModule({
  declarations: [
    AppComponent,
    TheprojectComponent,
    TheteamComponent,
    CatchComponent,
    TimelineComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent,   
    SelectStationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    JsonpModule,
    FormulaireModule,
    AngularFireModule.initializeApp(config),    
    InMemoryWebApiModule.forRoot(SeaData)
      ],
  providers: [AuthGuard,requestOptionsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }


