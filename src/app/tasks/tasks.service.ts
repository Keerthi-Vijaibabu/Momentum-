import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  name: string;
  priority: string;
  status: string;
  userId: string;
}

@Injectable({
  providedIn: 'root', // Ensures this service is available globally
})
export class TaskService {
  constructor(private firestore: Firestore) {}

  getTasksByUser(userId: string): Observable<Task[]> {
    const tasksRef = collection(this.firestore, 'tasks');
    const userTasksQuery = query(tasksRef, where('userId', '==', userId));
    return collectionData(userTasksQuery, { idField: 'id' }) as Observable<Task[]>;
  }
}
