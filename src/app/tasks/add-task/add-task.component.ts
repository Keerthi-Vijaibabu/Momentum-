import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <h2>Add New Task</h2>
      <form>
        <div class="mb-3">
          <label for="taskName">Task Name</label>
          <input type="text" id="taskName" class="form-control" placeholder="Enter task name" />
        </div>
        <div class="mb-3">
          <label for="dueDate">Due Date</label>
          <input type="date" id="dueDate" class="form-control" />
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
  `,
  styles: [
    `
      .container {
        background: #1e1e1e;
        color: #fff;
        padding: 20px;
        border-radius: 8px;
      }
    `,
  ],
})
export class AddTaskComponent {}
