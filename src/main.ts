import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { environment } from './environments/environment';

import { AuthService } from '../src/app/auth/auth.services';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Firebase Initialization
    provideAuth(() => getAuth()),
    provideRouter(routes),
    provideHttpClient(),
    { provide: AuthService, useClass: AuthService },
     // Auth module
  ],
}).catch(err => console.error(err));
