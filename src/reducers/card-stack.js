import {
  PUSH_ROUTE,
  POP_ROUTE,
  RESET_ROUTE,
  REPLACE_AT,
  REPLACE_AT_INDEX,
  JUMP_TO,
  JUMP_TO_INDEX,
  BACK,
  FORWARD
} from '../constants';

import {
  checkInitialState,
  isActionPotentiallyApplicable,
  getStateUtils
} from './helpers';

const StateUtils = getStateUtils();

export function cardStackReducer(initialState) {
  checkInitialState(initialState);

  // eslint-disable-next-line complexity
  return function cardStackReducerFn(state = initialState, action) {
    if (!isActionPotentiallyApplicable(action, state.key)) {
      return state;
    }

    switch (action.type) {
      case PUSH_ROUTE:
        return StateUtils.push(state, action.payload.route);
      case POP_ROUTE:
        return StateUtils.pop(state);
      case RESET_ROUTE:
        return StateUtils.reset(state, state.routes, action.payload.index);
      case REPLACE_AT:
        return StateUtils.replaceAt(state, action.payload.routeKey, action.payload.route);
      case REPLACE_AT_INDEX:
        return StateUtils.replaceAtIndex(state, action.payload.index, action.payload.route);
      case JUMP_TO:
        return StateUtils.jumpTo(state, action.payload.routeKey);
      case JUMP_TO_INDEX:
        return StateUtils.jumpToIndex(state, action.payload.routeIndex);
      case BACK:
        return StateUtils.back(state);
      case FORWARD:
        return StateUtils.forward(state);
      default:
        return state;
    }
  };
}
