import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  userName: string = 'User'; //dynamically load this after login

  constructor(private router: Router) {}

  // Navigate to Login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
