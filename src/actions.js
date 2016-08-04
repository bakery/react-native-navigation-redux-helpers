import { PUSH_ROUTE, POP_ROUTE, JUMP_TO , RESET_ROUTE } from './constants';

export function pushRoute (route, key) {
  if (!key) {
    throw new Error('pushRoute requires key argument');
  }

  return {
    type: PUSH_ROUTE,
    payload: {
      route,
      key
    }
  };
}

export function popRoute (key) {
  if (!key) {
    throw new Error('popRoute requires key argument');
  }

  return {
    type: POP_ROUTE,
    payload: {
      key
    }
  };
}

export function jumpTo(routeIndex, key) {
  if (!key) {
    throw new Error('jumpTo requires key argument');
  }

  return {
    type: JUMP_TO,
    payload: {
      routeIndex,
      key
    }
  };
}

export function reset(routes, key){
  if (!key) {
    throw new Error('Reset requires key argument');
  }
  return {
    type : RESET_ROUTE,
    payload : {
      routes
    }
  }
}
