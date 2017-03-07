import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class DefaultReducer {
  name: string;

  constructor(private store: Store<any>) {
  }

  set(val: any) {
    this.store.dispatch({ type: `${this.name}.set`, payload: val });
  }

  get() {
    return this.store.select(this.name);
  }

}
