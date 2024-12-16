import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router,RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  login() {
    
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    
    .then((userCredential) => {
      console.log('Login successful:', userCredential);
      console.log({ email: this.email, password: this.password });
      alert('Login Successful!');
      this.router.navigate(['/main']);
    })
    .catch((error) => {
      console.error('Login failed:', error.message);
      console.log({ email: this.email, password: this.password });
      alert('Login Failed: ' + error.message);
    });
}
}