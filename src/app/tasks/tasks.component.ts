import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from './tasks.service';
import { Auth, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  imports: [CommonModule, RouterLink, RouterOutlet]
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]> | null = null;

  constructor(private taskService: TaskService, private auth: Auth) {}

  ngOnInit() {
    user(this.auth).subscribe(currentUser => {
      if (currentUser) {
        console.log(currentUser.uid)
        this.tasks$ = this.taskService.getTasksByUser(currentUser.uid); // Fetch tasks
      }
    });
  }

  getPriorityClass(priority: string): string {
    return {
      High: 'priority-high',
      Mid: 'priority-mid',
      Low: 'priority-low',
    }[priority] || 'priority-default';
  }
}
