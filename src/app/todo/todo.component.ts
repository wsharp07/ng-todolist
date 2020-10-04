import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
    this.itemsRef = db.list('items');
  }

  addItem(newTask: String) {
    this.itemsRef.push({
      task: newTask
    })
  }

  ngOnInit(): void {
  }

}
