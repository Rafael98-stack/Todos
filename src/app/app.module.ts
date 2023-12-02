import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TodosComponent } from './Components/todos/todos.component';
import { CompletatiComponent } from './Components/completed/completed.component';

const route: Route[] = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'completed',
    component: CompletatiComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    CompletatiComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(route)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//
