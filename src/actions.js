import {
  PUSH_ROUTE,
  POP_ROUTE,
  RESET_ROUTE,
  REPLACE_AT,
  REPLACE_AT_INDEX,
  JUMP_TO,
  JUMP_TO_INDEX,
  BACK,
  FORWARD,
  GET,
  HAS,
  INDEX_OF
} from './constants';

export function pushRoute(route, key) {
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

export function popRoute(key) {
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

export function jumpTo(keyOrIndex, key) {
  // XX: to make this backwards compatible,
  // jumpTo supports both key and index first arg
  // JUMP_TO action is used if the first arg is a string key
  // otherwise JUMP_TO_INDEX is used 
  
  if (!key) {
    throw new Error('jumpTo requires key argument');
  }

  if (typeof keyOrIndex === 'string') {
    return {
      type: JUMP_TO,
      payload: {
        routeKey: keyOrIndex,
        key
      }
    };
  }

  return jumpToIndex(keyOrIndex, key);
}

export function reset(key, index) {
  if (!key) {
    throw new Error('reset requires key argument');
  }
  return {
    type: RESET_ROUTE,
    payload: {
      index,
      key
    }
  }
}

export function replaceAt(routeKey, route, key) {
  if (!key) {
    throw new Error('Replace At requires key argument');
  }

  return {
    type: REPLACE_AT,
    payload: {
      routeKey,
      route,
      key
    }
  }
}

export function replaceAtIndex(index, route, key) {
  if (!key) {
    throw new Error('Replace At Index requires key argument');
  }

  return {
    type: REPLACE_AT_INDEX,
    payload:
    {
      index,
      route,
      key
    }
  }
}


export function jumpToIndex(routeIndex, key) {
  if (!key) {
    throw new Error('Jump to Index requires key argument');
  }

  return {
    type: JUMP_TO_INDEX,
    payload: {
      routeIndex,
      key
    }
  }
}

export function back(key) {
  if (!key) {
    throw new Error('popRoute requires key argument');
  }

  return {
    type: BACK,
    payload: {
      key
    }
  };
}

export function forward(key) {
  if (!key) {
    throw new Error('popRoute requires key argument');
  }

  return {
    type: FORWARD,
    payload: {
      key
    }
  };
}
