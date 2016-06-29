import {
  pushRoute,
  goBack, 
  jumpTo,
} from '../../src/actions';
import {
  JUMP_TO_TAB,
  PUSH_ROUTE,
  BACK,
} from '../../src/constants';


describe('actions', () => {
  describe('definitions', () => {
    it('pushRoute action is defined', () => {
      expect(pushRoute).to.be.ok;
      expect(typeof pushRoute === 'function').to.be.true;
    });

    it('goBack action is defined', () => {
      expect(goBack).to.be.ok;
      expect(typeof goBack === 'function').to.be.true;
    });

    it('jumpTo action is defined', () => {
      expect(jumpTo).to.be.ok;
      expect(typeof jumpTo === 'function').to.be.true;
    });
  });

  describe('all actions', () => {
    it('require key attribute', () => {
      const pushRouteFn = () => pushRoute({});
      const goBackFn = () => goBack();
      const jumpToFn = () => jumpTo();

      expect(pushRouteFn).to.throw(Error);
      expect(goBackFn).to.throw(Error);
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

  describe('goBack', () => {
    it('returns a message with type set to BACK and appropriate payload', () => {
      const navigationKey = 'nav-key';
      const actionData = goBack(navigationKey);

      expect(actionData.type).to.equal(BACK);
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });

  describe('jumpTo', () => {
    it('returns a message with type set to JUMP_TO_TAB and appropriate payload', () => {
      const navigationKey = 'nav-key';
      const tabIndex = 3;
      const actionData = jumpTo(tabIndex, navigationKey);

      expect(actionData.type).to.equal(JUMP_TO_TAB);
      expect(actionData.payload).to.be.ok;
      expect(actionData.payload.tabIndex).to.equal(tabIndex);
      expect(actionData.payload.key).to.equal(navigationKey);
    });
  });
});
