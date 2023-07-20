import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  todos = signal<string[]>(this.getTodosFromStorage());

  constructor() {
    effect(() => this.saveTodosOnStorage(this.todos()));
  }

  saveTodo(todo: string): void {
    this.todos.update((todos) => [...todos, todo]);
  }

  private getTodosFromStorage(): string[] {
    const todos = localStorage.getItem('todos') || '[]';

    try {
      return JSON.parse(todos);
    } catch {
      return [];
    }
  }

  private saveTodosOnStorage(todos: string[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
