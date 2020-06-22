import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    { id: 1, description: 'learn' },
    { id: 2, description: 'run' },
    { id: 3, description: 'eat' }
  ]
  // todo = {
  //   id: 1,
  //   description: 'Learn porgramming'
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
