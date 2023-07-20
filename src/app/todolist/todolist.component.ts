import { Component, computed, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodolistService } from './todolist.service';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  private todolistService = inject(TodolistService);
  todos = this.todolistService.todos;
  todosCount = computed(() => this.todos().length);

  addTodo(todo: string): void {
    this.todolistService.saveTodo(todo);
  }
}
