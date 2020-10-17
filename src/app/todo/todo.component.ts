import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { faPlusSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { TaskService } from '../task.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TaskService]
})


export class TodoComponent implements OnInit {

  faPlusSquare = faPlusSquare;
  faTrashAlt = faTrashAlt;

  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  eeval(any: any){
    return true;
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
