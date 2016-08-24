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
    payload:
    {
      index,
      routeKey,
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


export function jumpToIndex(index, route, key) {
  if (!key) {
    throw new Error('Jump to Index requires key argument');
  }

  return {
    type: JUMP_TO_INDEX,
    payload:
    {
      index,
      route,
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

export function get(routeKey, key) {
  if (!key) {
    throw new Error('get requires key argument');
  }

  return {
    type: GET,
    payload: {
      key,
      routeKey
    }
  };
}

export function has(routeKey, key) {
  if (!key) {
    throw new Error('has requires key argument');
  }

  return {
    type: HAS,
    payload: {
      key,
      routeKey
    }
  };
}

export function indexOf(routeKey, key) {
  if (!key) {
    throw new Error('popRoute requires key argument');
  }

  return {
    type: INDEX_OF,
    payload: {
      key,
      routeKey
    }
  };
}
