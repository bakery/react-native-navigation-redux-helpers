export function cardStackReducer(initialState) {
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

  return function cardStackReducerFn(state = initialState, action) {
  
  };
};
