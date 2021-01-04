import {Injectable} from '@angular/core';
// import {HelloWorldBean} from './welcome-data.service';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {
  }
  retrieveAllTodos = username => this.http.get<Todo[]>(
    `${API_URL}/users/${username}/todos`
  )
  deleteTodo = (username: any, id: any) => this.http.delete(
    `${API_URL}/users/${username}/todos/${id}`
  )
  retrieveTodo = (username: any, id: any) => this.http.get<Todo>(
    `${API_URL}/users/${username}/todos/${id}`
  )
  updateTodo = (username: any, id: any, todo) => this.http.put<Todo>(
    `${API_URL}/users/${username}/todos/${id}`, todo
  )
  createTodo = (username: any, todo) => this.http.post<Todo>(
    `${API_URL}/users/${username}/todos/`, todo
  )
}
