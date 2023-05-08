import { Component } from '@angular/core';
//decorator
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-angular';

  todoValue: string;
  list: Todo[];
  // constructor() {
  //   console.log('constructor called');
  //   this.doSomething('money');
  // }

  // doSomething(val: string): void {
  //   console.log('function called', val);
  // }

  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }

  addItem() {
    if (this.todoValue != '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }
  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id != id);
  }
}
