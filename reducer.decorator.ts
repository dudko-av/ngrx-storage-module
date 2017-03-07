import { Action } from '@ngrx/store';

declare const Reflect: any;

export const appState = {};
export const appStateType = {};

export function Reducer() {
  return function (target: any, key: string) {
    const type = Reflect.getMetadata('design:type', target, key);
    appState[key] = (state: any, action: Action) => {
      if (action.type === `${key}.set`) {
        return action.payload;
      }
      return state;
    };
    appStateType[key] = type;
  };
}
