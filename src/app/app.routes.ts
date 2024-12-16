import { Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from '../app/home/home.component';
import { TimerComponent } from './timer/timer.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'timer', component: TimerComponent},
];
