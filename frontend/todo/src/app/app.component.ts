import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>{{title}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message = 'My name is Christian. It\'s nice to meet you!';
  question = 'How can I help you, today?';
}
