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
  // @ts-ignore
  // tslint:disable-next-line:typedef
  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
}
