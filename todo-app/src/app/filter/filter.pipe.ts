import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFiltro from './filter.actions';
@Pipe({
  name: 'pipeTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filtro: fromFiltro.filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completados':
        return todos.filter((e) => {
          return e.completado;
        });
      case 'pendientes':
        return todos.filter((e) => {
          return !e.completado;
        });
      default:
        return todos;
    }
  }
}
