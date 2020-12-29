import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

// you can insert as many classes into the .ts file because it's a JS file
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined;
  //   = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ];
  constructor(
    private toDoService: TodoDataService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.todos = this.toDoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

}
