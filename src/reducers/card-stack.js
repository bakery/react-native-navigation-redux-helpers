import { PUSH_ROUTE, POP_ROUTE , RESET_ROUTE } from '../constants';
import { checkInitialState, isActionPotentiallyApplicable, getStateUtils } from './helpers';

const StateUtils = getStateUtils();

export function cardStackReducer(initialState) {
  checkInitialState(initialState);

  return function cardStackReducerFn(state = initialState, action) {
    if (!isActionPotentiallyApplicable(action, state.key)) {
      return state;
    }

    switch(action.type) {
      case PUSH_ROUTE:
        return StateUtils.push(state, action.payload.route);
      case POP_ROUTE:
        return StateUtils.pop(state);
      case RESET_ROUTE:
        return StateUtils.reset(state, action.payload.routes)  
      default:
        return state;
    }
  };
}
