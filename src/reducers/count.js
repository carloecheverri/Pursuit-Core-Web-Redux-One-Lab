import { DECREMENT, INCREMENT } from "../actions/actionTypes";

export default function reduceCount(state = 0, action) {
  switch (action.type) {
    case DECREMENT:
      const decrementedState = state - 1;
      return decrementedState;
    case INCREMENT:
      const incrementState = state + 1;
      return incrementState;
  }
  return state;
}
