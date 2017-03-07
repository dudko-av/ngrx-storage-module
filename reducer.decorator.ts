import { Action } from '@ngrx/store';

declare const Reflect: any;

export const appState = {};
export const appStateType = {};

export function Reducer() {
  return function (target: any, key: string) {
    const type = Reflect.getMetadata('design:type', target, key);
    appState[key] = (state: any, action: Action) => {
      const { payload } = action;
      if (action.type === `${key}.set`) {
        if (Array.isArray(payload)) {
          return [].concat(payload);
        } else if (typeof payload === 'object') {
          return Object.assign({}, payload);
        }
        return action.payload;
      }
      return state;
    };
    appStateType[key] = type;
  };
}
