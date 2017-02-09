import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { TheprojectComponent } from './theproject/theproject.component';
import { TheteamComponent } from './theteam/theteam.component';
import { CatchComponent } from './catch/catch.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';



import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
export const router: Routes = [
    { path: '', redirectTo: '/theproject', pathMatch: 'full' },
    { path: 'theproject', component: TheprojectComponent },
    { path: 'theteam', component: TheteamComponent },
    { path: 'catch', component: CatchComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);