import { Injectable } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database/interfaces';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Observable<any[]>;
  tasksRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.tasks = db.list('items').snapshotChanges();
    this.tasksRef = db.list('items');
  }
  
  getTasks() : Observable<any[]> {
    return this.tasks
  }

  addTask(newTask: string) {
    this.tasksRef.push({
      task: newTask
    })
  }

  removeTask(obj: AngularFireAction<any>) {
    this.tasksRef.remove(obj.key);
  }
}
