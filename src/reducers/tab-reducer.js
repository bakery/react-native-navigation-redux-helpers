import { checkInitialState, isActionPotentiallyApplicable, getStateUtils } from './helpers';
import { JUMP_TO } from '../constants';

const StateUtils = getStateUtils();

export function tabReducer(initialState) {
  checkInitialState(initialState);

  return function tabReducerFn(state = initialState, action) {
    if (!isActionPotentiallyApplicable(action, state.key)) {
      return state;
    }

    switch(action.type) {
      case JUMP_TO:
        return StateUtils.jumpToIndex(state, action.payload.routeIndex);
      default:
        return state;
    }
  };
};
