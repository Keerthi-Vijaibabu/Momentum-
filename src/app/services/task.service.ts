import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private firestore: AngularFirestore) {}

  addTask(task: any) {
    return this.firestore.collection('tasks').add(task);
  }

  getTasks() {
    return this.firestore.collection('tasks').valueChanges();
  }

  deleteTask(id: string) {
    return this.firestore.collection('tasks').doc(id).delete();
  }
}
