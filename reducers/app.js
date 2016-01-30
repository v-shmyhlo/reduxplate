import { INCREMENT, DECREMENT } from '../constants/actionTypes';

const initial = 0;

export default function counter(state = initial, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
