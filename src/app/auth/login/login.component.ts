import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h2>Login</h2>
      <form>
        <div class="mb-3">
          <label>Email</label>
          <input type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input type="password" class="form-control" />
        </div>
        <button class="btn btn-primary">Login</button>
      </form>
    </div>
  `,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {}
