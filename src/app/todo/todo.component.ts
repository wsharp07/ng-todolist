import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

import {NgForm} from '@angular/forms';

import { faPlusSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { AngularFireAction } from '@angular/fire/database/interfaces';

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

  constructor(db: AngularFireDatabase) {
    this.items = db.list('items').snapshotChanges();
    this.itemsRef = db.list('items');
  }

  addItem(newTask: String) {
    this.itemsRef.push({
      task: newTask
    })
  }

  removeItem(obj: AngularFireAction<any>) {
    this.itemsRef.remove(obj.key);
  }

  onSubmit(frmAddTask: NgForm) {
 
    if (!frmAddTask.valid) {
      console.log("INVALID FORM");
      return;
    }

    this.addItem(frmAddTask.value.newTask);

    frmAddTask.resetForm();
  }

  ngOnInit(): void {
  }

}
