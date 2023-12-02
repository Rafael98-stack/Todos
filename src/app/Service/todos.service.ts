import { Injectable } from '@angular/core';
import { Todo } from '../Models/todo';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todo: Todo[] = [];

  constructor() {}

  add(todo: Partial<Todo>): Promise<Todo> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const newTodo: Partial<Todo> = { ...todo, id: this.todo.length + 1 };
        this.todo.push(newTodo as Todo);
        res(newTodo as Todo);
      }, 2000);
    });
  }

  get(): Promise<Todo[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.todo);
      }, 2000);
    });
  }

  update(newTodo: Partial<Todo>, id: number): Promise<Todo> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.todo = this.todo.map((todo) => {
          return todo.id === id ? { ...todo, ...newTodo } : todo;
        });
        const aggiornato: Todo | undefined = this.todo.find(
          (todo) => todo.id === id
        );
        res(aggiornato as Todo);
      }, 2000);
    });
  }
}
