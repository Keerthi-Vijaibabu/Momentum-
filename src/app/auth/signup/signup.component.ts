/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',    
  imports: [CommonModule, FormsModule],
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private auth: Auth) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        console.log('Signup successful:', userCredential);
        alert('Signup Successful! Please log in.');
      })
      .catch((error) => {
        console.error('Signup failed:', error.message);
        alert('Signup Failed: ' + error.message);
      });
  }
}
*/
import { Component, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
//import { NgZone } from '@angular/core'; //NgZone for zone management
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'], 
  imports: [CommonModule,FormsModule],
})
export class SignupComponent {
  email: string = ''; // User email
  password: string = ''; // User password
  confirmPassword: string = '';

  private auth: Auth = inject(Auth);

  signup() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        console.log('Signup successful:', userCredential);
        alert('Signup Successful! Please log in.');
      })
      .catch((error) => {
        console.error('Signup failed:', error.message);
        alert('Signup Failed: ' + error.message);
      });
  }
}
