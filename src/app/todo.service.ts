import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: any[] = [];

  constructor() {
    if (this.isLocalStorageAvailable()) {
      this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    }
  }

  getTodos() {
    return this.todos;
  }

  addTodo(text: string) {
    this.todos.push({ text, completed: false });
    this.saveTodos();
  }

  markComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.saveTodos();
  }

  deleteItem(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // your own service?
  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
