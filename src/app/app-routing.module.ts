import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Shared routes for both client and server
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('../app/home/home.component').then(m => m.HomeComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Use the shared routes
  exports: [RouterModule],
})
export class AppRoutingModule {}