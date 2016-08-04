import { PUSH_ROUTE,
         POP_ROUTE,
         JUMP_TO ,
         RESET_ROUTE,
         REPLACE_AT,
         REPLACE_AT_INDEX,
         JUMP_TO,
         JUMP_TO_INDEX,
         BACK,
         FORWARD,
         GET,
         HAS,
         INDEX_OF } from '../constants';
import { checkInitialState, isActionPotentiallyApplicable, getStateUtils } from './helpers';

const StateUtils = getStateUtils();

export function cardStackReducer(initialState) {
  checkInitialState(initialState);

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
      return StateUtils.reset(state, action.payload.routes);
    case REPLACE_AT:
      return StateUtils.replaceAt(state, action.payload.routes);
    case REPLACE_AT_INDEX:
      return StateUtils.replaceAtIndex(state, action.payload.index, action.payload.route);
    case JUMP_TO_INDEX:
      return StateUtils.jumpToIndex(state, action.payload.index);
    case BACK:
      return StateUtils.back(state);
    case FORWARD:
      return StateUtils.forward(state);
    case GET:
      return StateUtils.get(state, action.payload.routeKey);
    case HAS:
      return StateUtils.has(state, action.payload.routeKey);
    case INDEX_OF:
      return StateUtils.indexOf(state, action.payload.routeKey);
    default:
      return state;
  }
  };
}
