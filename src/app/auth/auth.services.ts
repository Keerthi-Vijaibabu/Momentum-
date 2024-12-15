import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // User Login
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login successful!');
        this.router.navigate(['/dashboard']); // Redirect to dashboard
      })
      .catch((error) => {
        console.error('Login Error:', error.message);
        alert(error.message);
      });
  }

  // User Registration
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Registration successful!');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error('Registration Error:', error.message);
        alert(error.message);
      });
  }

  // User Logout
  logout() {
    return this.afAuth.signOut().then(() => {
      console.log('Logged out!');
      this.router.navigate(['/login']); // Redirect to login page
    });
  }

  // Check Authentication State
  getCurrentUser() {
    return this.afAuth.authState;
  }
}
