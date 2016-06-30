import {
  pushRoute,
  popRoute, 
  jumpTo,
} from '../../src/actions';
import {
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE,
} from '../../src/constants';


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
      const navigationKey = 'nav-key';
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
      const navigationKey = 'nav-key';
      const actionData = popRoute(navigationKey);

      expect(actionData.type).to.equal(POP_ROUTE);
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });

  describe('jumpTo', () => {
    it('returns a message with type set to JUMP_TO and appropriate payload', () => {
      const navigationKey = 'nav-key';
      const tabIndex = 3;
      const actionData = jumpTo(tabIndex, navigationKey);

      expect(actionData.type).to.equal(JUMP_TO);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.routeIndex).to.equal(tabIndex);
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });
});
