import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import {NgForm} from '@angular/forms';

import { faPlusSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { AngularFireAction } from '@angular/fire/database/interfaces';

import { TaskService } from '../task.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {

  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;

  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  onSubmit(frmAddTask: NgForm) {
 
    if (!frmAddTask.valid) {
      console.log("INVALID FORM");
      return;
    }

    this.taskService.addTask(frmAddTask.value.newTask);

    frmAddTask.resetForm();
  }

  ngOnInit(): void {
  }

}
