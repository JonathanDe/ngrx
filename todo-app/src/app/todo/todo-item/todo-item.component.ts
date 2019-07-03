import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../model/todo.model';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
  checkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkField = new FormControl(this.item.completado);
    this.txtInput = new FormControl(this.item.texto, Validators.required);
    // console.log(this.item);
    this.checkField.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.item.id);
      this.store.dispatch(action);
    });
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1000);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.item.texto) {
      return;
    }

    const action = new EditTodoAction(this.item.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  borrarTodo(){
    const action = new BorrarTodoAction(this.item.id);
    this.store.dispatch(action);
  }
}
