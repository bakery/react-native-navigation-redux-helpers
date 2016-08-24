import {
  pushRoute,
  popRoute, 
  jumpTo,
  reset
} from '../../src/actions';
import {
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE,
  RESET_ROUTE
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
    it('returns a message with type set to JUMP_TO and appropriate payload', () => {    
      const tabIndex = 3;
      const actionData = jumpTo(tabIndex, navigationKey);

      expect(actionData.type).to.equal(JUMP_TO);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.routeIndex).to.equal(tabIndex);
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });

  describe('reset', () => {
    it('returns a message with type set to RESET_ROUTE', () => {
      const actionData = reset(navigationKey);
      expect(actionData.type).to.equal(RESET_ROUTE);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.key).to.equal(navigationKey);
    });

    it('returns a message with payload.index set to index passed as second arg', () => {
      const actionData = reset(navigationKey, 1);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.index).to.equal(1);
    });
  });
});
