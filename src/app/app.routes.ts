import { Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { HomeComponent } from '../app/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];
