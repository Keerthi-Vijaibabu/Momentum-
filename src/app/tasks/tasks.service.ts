import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  name: string;
  dueDate?: string;
  userId: string;
  status?: string;
  priority?: string;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private firestore: Firestore) {}

  // Fetch tasks by user ID
  getTasksByUser(userId: string): Observable<Task[]> {
    const taskCollection = collection(this.firestore, 'tasks');
    const q = query(taskCollection, where('userId', '==', userId));
    return collectionData(q, { idField: 'id' }) as Observable<Task[]>;
  }

  // Add a new task
  addTask(task: Task): Promise<void> {
    const taskCollection = collection(this.firestore, 'tasks');
    return addDoc(taskCollection, task).then(() => {
      console.log('Task added successfully');
    });
  }
}
