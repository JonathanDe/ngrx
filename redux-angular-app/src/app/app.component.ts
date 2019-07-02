import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-angular-app';
  contador: number;

  constructor(private store: Store<AppState>){
    // Normal Angular implementation
    // this.contador = 10;

    // Subscribe to the whole state
    // this.store.subscribe(state =>{
    //   this.contador = state.contador;
    //   console.log(state);
    // })

    // Subscribe to an specific part of the state

    this.store.select('contador').subscribe((contador) =>{
      this.contador = contador;
    });
  }

  incrementar() {
    // Normal Angular implementation
    // this.contador ++;
    // const action: Action = {
    //   type: 'INCREMENTAR',
    // }

    // Using ngrx
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    // Normal Angular implementation
    // this.contador --;
    // const action: Action = {
    //   type: 'DECREMENTAR'
    // }

    // Using ngrx
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }
}
