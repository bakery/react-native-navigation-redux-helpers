export function checkInitialState(initialState) {
  if (!initialState) {
    throw Error('initialState arg is required');
  }

  if (typeof initialState.key !== 'string') {
    throw Error('initialState must have an attribute **key** which is a string');
  }

  if (typeof initialState.index !== 'number') {
    throw Error('initialState must have an attribute **index** which is a number');
  }

  if (!(initialState.routes instanceof Array)) {
    throw Error('initialState must have an attribute **route** which is an array');
  }
}

export function isActionPotentiallyApplicable(action, navigationKey) {
  return action && action.payload && (action.payload.key === navigationKey);
}

export function getStateUtils() {
  try {
    const { NavigationExperimental } = require('react-native');
    return NavigationExperimental.StateUtils;
  } catch(e) {
    // no-op
  }

  return {};
}
