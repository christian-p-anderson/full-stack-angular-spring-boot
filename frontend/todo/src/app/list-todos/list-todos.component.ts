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

  // @ts-ignore
  todos: Todo[];

  constructor(
    private toDoService: TodoDataService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // @ts-ignore
    this.todos = this.toDoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }
  // tslint:disable-next-line:typedef
  deleteTodo(id: any) {
    console.log(`delete Todo ${id}`);
  }

}
