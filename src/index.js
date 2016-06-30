import { JUMP_TO, PUSH_ROUTE, POP_ROUTE } from './constants';
import { pushRoute, popRoute, jumpTo } from './actions';
import { cardStackReducer as csr } from './reducers/card-stack';
import { tabReducer as tr } from './reducers/tab-reducer';

export const constants = {
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE
};

export const actions = {
  pushRoute,
  popRoute, 
  jumpTo,
};

export const cardStackReducer = csr;
export const tabReducer = tr;
