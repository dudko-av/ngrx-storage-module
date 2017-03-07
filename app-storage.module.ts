import { NgModule, ReflectiveInjector, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appState, appStateType } from './reducer.decorator';
import { DefaultReducer } from './default-reducer/default-reducer.service';

export function initialiseService(injector: Injector, service) {
  const sv = ReflectiveInjector.resolveAndCreate([service], injector).get(service);
  Object.keys(appStateType).forEach(reducerName => {
    const reducer: DefaultReducer = ReflectiveInjector
      .resolveAndCreate([appStateType[reducerName]], injector)
      .get(appStateType[reducerName]);
    reducer.name = reducerName;
    sv[reducerName] = reducer;
  });
  return sv;
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore(appState)
  ],
  declarations: []
})
export class AppStorageModule extends StoreModule {
  static forRoot() {
    return {
      ngModule: AppStorageModule,
      providers: [
        DefaultReducer
      ]
    };
  }
}
