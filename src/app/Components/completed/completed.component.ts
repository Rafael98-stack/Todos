import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodosService } from 'src/app/Service/todos.service';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletatiComponent implements OnInit {
  todo!: Todo[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.get().then((todos) => {
      this.todo = todos.filter((todo) => todo.completed);
    });
  }
}
