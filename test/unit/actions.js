import {
  pushRoute,
  popRoute, 
  jumpTo,
  reset,
  replaceAt,
  replaceAtIndex,
  jumpToIndex,
  back,
  forward
} from '../../src/actions';
import {
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE,
  RESET_ROUTE,
  REPLACE_AT,
  REPLACE_AT_INDEX,
  JUMP_TO_INDEX,
  BACK,
  FORWARD
} from '../../src/constants';

const navigationKey = 'nav-key';

describe('actions', () => {
  describe('definitions', () => {
    it('pushRoute action is defined', () => {
      expect(pushRoute).to.be.ok;
      expect(typeof pushRoute === 'function').to.be.true;
    });

    it('popRoute action is defined', () => {
      expect(popRoute).to.be.ok;
      expect(typeof popRoute === 'function').to.be.true;
    });

    it('jumpTo action is defined', () => {
      expect(jumpTo).to.be.ok;
      expect(typeof jumpTo === 'function').to.be.true;
    });

    it('reset action is defined', () => {
      expect(reset).to.be.ok;
      expect(typeof reset === 'function').to.be.true;
    });
  });

  describe('all actions', () => {
    it('require key attribute', () => {
      const pushRouteFn = () => pushRoute({});
      const popRouteFn = () => popRoute();
      const jumpToFn = () => jumpTo();

      expect(pushRouteFn).to.throw(Error);
      expect(popRouteFn).to.throw(Error);
      expect(jumpToFn).to.throw(Error);
    });
  });

  describe('pushRoute', () => {
    it('returns a message with type set to PUSH_ROUTE and appropriate payload', () => {
      const route = { key: 'route', data : {} };
      const actionData = pushRoute(route, navigationKey);

      expect(actionData.type).to.equal(PUSH_ROUTE);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.route).to.equal(route);
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });

  describe('popRoute', () => {
    it('returns a message with type set to POP_ROUTE and appropriate payload', () => {
      const actionData = popRoute(navigationKey);

      expect(actionData.type).to.equal(POP_ROUTE);
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });

  describe('jumpTo', () => {
    it('returns a message with type set to JUMP_TO_INDEX and appropriate payload with index first arg', () => {    
      const tabIndex = 3;
      const actionData = jumpTo(tabIndex, navigationKey);

      expect(actionData.type).to.equal(JUMP_TO_INDEX);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.routeIndex).to.equal(tabIndex);
      expect(actionData.payload.key).to.equal(navigationKey);
    });

    it('supports string key first argument and returns message with type JUMP_TO and proper payload', () => {
      const routeKey = 'key';
      const actionData = jumpTo(routeKey, navigationKey);

      expect(actionData.type).to.equal(JUMP_TO);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.routeKey).to.equal(routeKey);
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });

  describe('reset', () => {
    it('returns a message with type set to RESET_ROUTE', () => {
      const routes = [{ key: 'route1' }];
      const actionData = reset(routes, navigationKey);
      expect(actionData.type).to.equal(RESET_ROUTE);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.key).to.equal(navigationKey);
      expect(actionData.payload.routes).to.equal(routes);
    });

    it('returns a message with payload.index set to index passed as second arg', () => {
      const routes = [{ key: 'route1' }];
      const actionData = reset(routes, navigationKey, 1);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.routes).to.equal(routes);
      expect(actionData.payload.index).to.equal(1);
    });
  });

  describe('replaceAt', () => {
    it('returns a message with type set to REPLACE_AT + proper payload', () => {
      const route = { key: 'new route' };
      const routeKey = 'old route';
      const actionData = replaceAt(routeKey, route, navigationKey);
      expect(actionData.type).to.equal(REPLACE_AT);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.routeKey).to.equal(routeKey);
      expect(actionData.payload.route).to.equal(route);
    });
  });

  describe('replaceAtIndex', () => {
    it('returns a message with type set to REPLACE_AT_INDEX + proper payload', () => {
      const route = { key: 'new route' };
      const index = 1;
      const actionData = replaceAtIndex(index, route, navigationKey);
      expect(actionData.type).to.equal(REPLACE_AT_INDEX);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.index).to.equal(index);
      expect(actionData.payload.route).to.equal(route);
    });
  });

  describe('jumpToIndex', () => {
    it('returns a message with type set to JUMP_TO_INDEX + proper payload', () => {
      const index = 1;
      const actionData = jumpToIndex(index, navigationKey);
      expect(actionData.type).to.equal(JUMP_TO_INDEX);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.routeIndex).to.equal(index);
    });
  });

  describe('back', () => {
    it('returns a message with type set to BACK + proper payload', () => {
      const actionData = back(navigationKey);
      expect(actionData.type).to.equal(BACK);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });

  describe('forward', () => {
    it('returns a message with type set to FORWARD + proper payload', () => {
      const actionData = forward(navigationKey);
      expect(actionData.type).to.equal(FORWARD);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });
});
