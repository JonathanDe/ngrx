import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  contador: number;
  // Normal Angular implementation
  // @Input() contador:number;
  // @Output() contadorCambio = new EventEmitter<number>();

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
    })
  }

  ngOnInit() {
  }

  reset(){
    // Normal Angular implementation
    // this.contadorCambio.emit(0);
    const accion = new ResetAction();
    this.store.dispatch(accion);
  }

}
