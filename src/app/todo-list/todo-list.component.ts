import { Component } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos: any[] = [];
  newTodo: string = '';

  constructor() {}

  ngOnInit() {
    this.todos = [];
  }

  addTodo() {
    console.log('add selected');
  }

  markCompleted(index: number) {
    console.log('index ', index);
  }
}
