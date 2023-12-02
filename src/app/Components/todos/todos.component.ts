import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/Service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todo!: Todo[];
  titolo: string | undefined;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.get().then((todo) => {
      this.todo = todo.filter((todo) => !todo.completed);
    });
  }

  async aggiungi() {
    if (this.titolo != undefined) {
      const nuovo = await this.todosService.add({
        title: this.titolo,
        completed: false,
      });
      this.todo.push(nuovo);
      this.titolo = '';
    } else {
      alert('inserisci un parametro!');
      return;
    }
  }

  async completa(todo: Todo, i: number) {
    await this.todosService.update({ completed: true }, todo.id);
    this.todo.splice(i, 1);
  }
}
