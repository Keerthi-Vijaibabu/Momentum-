import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
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
