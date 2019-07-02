import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '.././../app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  // Normal Angular implementation
  // @Input() contador;
  // @Output() cambioContador = new EventEmitter<number>();

  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
    })
  }

  ngOnInit() {}

  multiplicar() {
    this.contador *= 2;
    // Normal Angular implementation
    // this.cambioContador.emit(this.contador);
    const accion = new MultiplicarAction(5)
    this.store.dispatch(accion);
  }

  dividir() {
    this.contador /= 2;
    // Normal Angular implementation
    // this.cambioContador.emit(this.contador);
    const accion = new DividirAction(5);
    this.store.dispatch(accion)
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    // Normal Angular implementation
    // this.cambioContador.emit(this.contador);

  }
}
