import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h2>Login</h2>
      <form (ngSubmit)="login()">
        <div class="mb-3">
          <label>Email</label>
          <input type="email" [(ngModel)]="email" name="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input type="password" [(ngModel)]="password" name="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  `,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  private auth: Auth = inject(Auth); // Inject Firebase Auth instance

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(userCredential => {
        console.log('Login successful:', userCredential);
        alert('Login Successful!');
      })
      .catch(error => {
        console.error('Login failed:', error);
        alert('Login Failed: ' + error.message);
      });
  }
}
