import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

@Injectable()
export class DefaultReducer<T> {
  name: string;

  constructor(private store: Store<any>) {
  }

  set(val: T) {
    this.store.dispatch({ type: `${this.name}.set`, payload: val });
  }

  get(): Observable<T> {
    return this.store.select(this.name);
  }

  get value(): T {
    let val;
    this.get().first().subscribe(v => val = v);
    return val;
  }

}
