import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private auth: Auth) {}
  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      console.log('Login successful:', userCredential);
      alert('Login Successful!');
    })
    .catch((error) => {
      console.error('Login failed:', error.message);
      alert('Login Failed: ' + error.message);
    });
}
}