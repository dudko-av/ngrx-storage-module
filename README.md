# ngrx-storage-module
# Example

import { Injectable } from '@angular/core';
import { Reducer } from '../app-storage-module/reducer.decorator';
import { DefaultReducer } from '../app-storage-module/default-reducer/default-reducer.service';

@Injectable()
export class AppStoreService {
  @Reducer() user: DefaultReducer<any[]>;
  @Reducer() test: DefaultReducer<string>;
  @Reducer() token: DefaultReducer<number>;
  @Reducer() token2: DefaultReducer<number>;

  constructor() { }

}

import { AppStoreService } from './shared/app-store/app-store.service';
import { initialiseService } from './shared/app-storage-module/app-storage.module';
import { Injector } from '@angular/core';

export function initialiseStoreService(injector) {
  return initialiseService(injector, AppStoreService);
}

export const appProviders = [
  { provide: AppStoreService,
    useFactory: initialiseStoreService,
    deps: [Injector] }
];
