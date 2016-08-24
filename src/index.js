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

import {
  pushRoute,
  popRoute,
  jumpTo,
  reset,
  replaceAt,
  replaceAtIndex,
  jumpToIndex,
  back,
  forward,
  get,
  has,
  indexOf
} from './actions';

import { cardStackReducer as csr } from './reducers/card-stack';
import { tabReducer as tr } from './reducers/tab-reducer';

export const constants = {
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
};

export const actions = {
  pushRoute,
  popRoute,
  jumpTo,
  reset,
  replaceAt,
  replaceAtIndex,
  jumpToIndex,
  back,
  forward,
  get,
  has,
  indexOf
};

export const cardStackReducer = csr;
export const tabReducer = tr;
