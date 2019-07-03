import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import * as fromFiltro from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todosList: Todo[] = [];
  filtroSeleccionado: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe((state) =>{
      this.todosList = state.todos;
      this.filtroSeleccionado = state.filtro;
    })
  }

}
