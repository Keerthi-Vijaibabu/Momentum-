import { Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from '../app/home/home.component';
import { TimerComponent } from './timer/timer.component';
import { MainComponent } from './main/main.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthGuard } from '../app/auth/auth.gaurd';
import { AddTaskComponent } from './tasks/add-task/add-task.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'timer', component: TimerComponent},
  {path:'task', component:TasksComponent},
  {path:'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
  { path: 'add-task', component: AddTaskComponent },
];


