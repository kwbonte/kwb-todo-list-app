import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItemComponent {
  @Input() todo: any;
  @Output() markComplete = new EventEmitter<void>();

  onChecked() {
    console.log('hey this works');
    this.markComplete.emit();
  }
}
