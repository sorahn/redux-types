import { createStore, AnyAction } from "redux";

export type Store = {
  toggle: boolean;
};

const reducer = (
  state: Store = { toggle: false },
  action: AnyAction
): Store => {
  switch (action.type) {
    case "TOGGLE":
      return { toggle: !state.toggle };
    default:
      return state;
  }
};

export const store = createStore(reducer);
