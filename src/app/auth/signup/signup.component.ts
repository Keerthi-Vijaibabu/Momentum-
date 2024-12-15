import { Component } from '@angular/core';
import { AuthService } from '../auth.services';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './signup.component.html',
  imports: [FormsModule]
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password);
  }
}
