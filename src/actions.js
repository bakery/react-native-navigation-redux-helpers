import { PUSH_ROUTE, BACK, JUMP_TO_TAB } from './constants';

export function pushRoute (route, key) {
  if (!key) {
    throw new Error('pushRoute requires key argument');
  } 

  return {
    type: PUSH_ROUTE,
    payload: {
      route,
      key,
    }
  };
}

export function goBack (key) {
  if (!key) {
    throw new Error('goBack requires key argument');
  }

  return {
    type: BACK,
    payload: {
      key
    }
  };
}

export function jumpTo(tabIndex, key) {
  if (!key) {
    throw new Error('jumpTo requires key argument');
  }

  return {
    type: JUMP_TO_TAB,
    payload: {
      tabIndex,
      key,
    }
  };
}