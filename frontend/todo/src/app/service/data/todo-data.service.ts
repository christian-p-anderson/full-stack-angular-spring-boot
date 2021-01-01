import {Injectable} from '@angular/core';
import {HelloWorldBean} from './welcome-data.service';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  // tslint:disable-next-line:typedef
  deleteTodo(username: any, id: any) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  // tslint:disable-next-line:typedef
  retrieveTodo(username: any, id: any) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  // tslint:disable-next-line:typedef
  updateTodo(username: any, id: any, todo) {
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }
  // tslint:disable-next-line:typedef
  createTodo(username: any, todo) {
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos/`, todo);
  }
}
