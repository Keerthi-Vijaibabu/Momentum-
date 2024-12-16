import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TaskComponent {
  tasks = [
    {
      status: 'Not started',
      project: 'Bus Tracking',
      deadline: 'December 14, 2024',
      priority: 'High',
      keywords: ['college'],
    },
    {
      status: 'Not started',
      project: 'VR',
      deadline: 'January 1, 2025',
      priority: 'High',
      keywords: ['college'],
    },
    {
      status: 'Not started',
      project: 'Camestetic',
      deadline: '',
      priority: 'Low',
      keywords: ['personal'],
    },
    {
      status: 'Not started',
      project: 'RND',
      deadline: '',
      priority: 'Mid',
      keywords: ['personal'],
    },
    {
      status: 'Not started',
      project: 'AutoFlush',
      deadline: '',
      priority: 'Mid',
      keywords: ['personal', 'college'],
    },
    {
      status: 'Not started',
      project: 'bluekode - internship',
      deadline: '',
      priority: 'Mid',
      keywords: ['college', 'personal'],
    },
  ];

  // Dynamic class for status
  getStatusClass(status: string): string {
    return status === 'Not started' ? 'status-not-started' : '';
  }

  // Dynamic class for priority
  getPriorityClass(priority: string): string {
    return {
      High: 'priority-high',
      Mid: 'priority-mid',
      Low: 'priority-low',
    }[priority]||'priority-default';
  }
}
