import { Injectable } from '@angular/core';
import { AngularFireAction } from '@angular/fire/database/interfaces';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements ITaskService {

  tasks: Observable<any[]>;
  tasksRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase, t: AngularFirestore) {
    this.tasks = db.list('items').snapshotChanges();
    this.tasksRef = db.list('items');
    db.list
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

export class MockDataSnaphot {
  val() {
    return { task: 'Test'}
  }
}

@Injectable()
export class MockTaskService implements ITaskService {
  constructor(){}

  

  getTasks(): Observable<any[]>{
      return of([{
        payload: {
          val: function () {
            return { task: 'Test'}
          }
        }
      }]);
  }

  addTask(newTask: string) {
    return 'New Task';
  }

  removeTask(obj: AngularFireAction<any>) {
    return true;
  }

}

interface ITaskService {
  getTasks(): Observable<any[]>;
  addTask(newTask: string);
  removeTask(obj: AngularFireAction<any>);
}