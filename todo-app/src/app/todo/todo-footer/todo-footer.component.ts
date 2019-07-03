import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  filtrosValidos: fromFiltro.filtrosValidos[] = [
    'todos',
    'completados',
    'pendientes',
  ];
  filtroActual: fromFiltro.filtrosValidos;
  tareasPendites: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.tareasPendites = state.todos.filter((e) => {
        return !e.completado;
      }).length;
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const action = new fromFiltro.SetFilterAction(nuevoFiltro);
    this.store.dispatch(action);
  }

  borrarTodo(){
    const action = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch(action);
  }

}
