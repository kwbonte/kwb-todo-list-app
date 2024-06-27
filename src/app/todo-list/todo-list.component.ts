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
    this.todos = [
      { text: 'Buy groceries', completed: false },
      { text: 'Finish Angular project', completed: false },
      { text: 'Call mom', completed: false },
    ];
  }

  addTodo() {
    console.log('add selected');
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo.trim(), completed: false });
      this.newTodo = '';
    }
  }

  markComplete(index: number) {
    console.log('index ', index);
    this.todos[index].completed = !this.todos[index].completed;
  }
}
