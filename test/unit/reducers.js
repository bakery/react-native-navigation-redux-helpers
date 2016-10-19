import { __RewireAPI__ as cardStackReducerAPI, cardStackReducer } from '../../src/reducers/card-stack';
import { __RewireAPI__ as tabReducerAPI, tabReducer } from '../../src/reducers/tab-reducer';
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

const cardStackInitialState = {
  key: 'key',
  index: 0,
  routes: [{
    key: 'route-1',
    title: 'Route 1'
  }]
};

const repeatedRoute = {
  key: 'route-1',
  title: 'Route 1'
};

const tabInitialState = {
  key: 'ta-key',
  index: 0,
  routes: [
    {
      key: 'route-1',
      title: 'Route 1'
    },
    {
      key: 'route-2',
      title: 'Route 2'
    }
  ]
}

describe('reducers', () => {
  let pushSpy, popSpy, jumpToIndexSpy, jumpToSpy,
    resetSpy, replaceAtSpy, replaceAtIndexSpy,
    backSpy, forwardSpy;
  
  const StateUtils = {
    push(state, action) {
      return 'StateUtils.push';
    },

    pop(state) {
      return 'StateUtils.pop';
    },

    jumpTo(state, key) {
      return 'StateUtils.jumpTo';
    },

    jumpToIndex(state, index) {
      return 'StateUtils.jumpToIndex';
    },

    reset(state, routes, index) {
      return 'StateUtils.reset';
    },

    replaceAt(state, key, route) {
      return 'StateUtils.replaceAt';
    },

    replaceAtIndex(state, index, route) {
      return 'StateUtils.replaceAtIndex';
    },

    back(state) {
      return 'StateUtils.back';
    },

    forward(state) {
      return 'StateUtils.forward';
    }
  };

  describe('definitions', () => {
    it('cardStackReducer is defined and it is a function', () => {
      expect(cardStackReducer).to.be.ok;
      expect(typeof cardStackReducer === 'function').to.be.true;
    });

    it('tabReducer is defined and it is a function', () => {
      expect(tabReducer).to.be.ok;
      expect(typeof tabReducer === 'function').to.be.true;
    });
  });

  describe('cardStackReducer', () => {
    let reducer;

    beforeEach(() => {
      reducer = cardStackReducer(cardStackInitialState);

      cardStackReducerAPI.__Rewire__('StateUtils', StateUtils);
      pushSpy = spy(StateUtils, 'push');
      popSpy = spy(StateUtils, 'pop');
      resetSpy = spy(StateUtils, 'reset');
      replaceAtSpy = spy(StateUtils, 'replaceAt');
      replaceAtIndexSpy = spy(StateUtils, 'replaceAtIndex');
      jumpToSpy = spy(StateUtils, 'jumpTo');
      jumpToIndexSpy = spy(StateUtils, 'jumpToIndex');
      backSpy = spy(StateUtils, 'back');
      forwardSpy = spy(StateUtils, 'forward');
    });

    afterEach(() => {
      StateUtils.push.restore();
      StateUtils.pop.restore();
      StateUtils.reset.restore();
      StateUtils.replaceAt.restore();
      StateUtils.replaceAtIndex.restore();
      StateUtils.jumpTo.restore();
      StateUtils.jumpToIndex.restore();
      StateUtils.back.restore();
      StateUtils.forward.restore();
      cardStackReducerAPI.__ResetDependency__('StateUtils');
    });

    it('throws if initial state does not look good', () => {
      const cardStackReducerFnNoInitialState = () => cardStackReducer();
      const cardStackReducerFnJustKey = () => cardStackReducer({ key: 'key' });
      const cardStackReducerFnNoRoutes = () => cardStackReducer({ key: 'key', index: 0 });

      expect(cardStackReducerFnNoInitialState).to.throw(Error);
      expect(cardStackReducerFnJustKey).to.throw(Error);
      expect(cardStackReducerFnNoRoutes).to.throw(Error);
    });

    it('returns a function', () => {
      expect(typeof reducer === 'function').to.be.true;
    });

    it('returns navigation state for random events', () => {
      expect(reducer(cardStackInitialState, null)).to.equal(cardStackInitialState);
      expect(reducer(cardStackInitialState, { type: 'RANDOM_EVENT' })).to.equal(cardStackInitialState);
    });

    it('calls RN\'s StateUtils.push when pushRoute action arrives and returns whatever StateUtils.push returns', () => {
      const action = pushRoute({ key: 'route' }, cardStackInitialState.key);

      const returnValue = reducer(cardStackInitialState, action);

      expect(pushSpy).to.have.been.calledOnce;
      expect(pushSpy).to.have.been.calledWith(cardStackInitialState, action.payload.route);
      expect(returnValue).to.equal('StateUtils.push');
    });

    it('does not call RN\'s StateUtils.push when pushRoute action has payload.key same with current route state.key and returns current nav state', () => {
      const action = pushRoute({ key: 'route' }, repeatedRoute.key);

      const returnValue = reducer(cardStackInitialState, action);
      expect(pushSpy.callCount).to.equal(0);
      expect(returnValue).to.equal(cardStackInitialState);
    });

    it('does not call RN\'s StateUtils.push when pushRoute action has payload.key different from state.key and returns current nav state', () => {
      const action = pushRoute({ key: 'route' }, 'nav');

      const returnValue = reducer(cardStackInitialState, action);
      expect(pushSpy.callCount).to.equal(0);
      expect(returnValue).to.equal(cardStackInitialState);
    });

    it('calls RN\'s StateUtils.pop when popRoute action arrives and returns whatever StateUtils.pop returns', () => {
      const action = popRoute(cardStackInitialState.key);
      const returnValue = reducer(cardStackInitialState, action);

      expect(popSpy).to.have.been.calledOnce;
      expect(popSpy).to.have.been.calledWith(cardStackInitialState);
      expect(returnValue).to.equal('StateUtils.pop');
    });

    it('does not call RN\'s StateUtils.pop when popRoute action has payload.key different from state.key and returns current nav state', () => {
      const action = popRoute('random-nav-key');
      const returnValue = reducer(cardStackInitialState, action);

      expect(popSpy.callCount).to.equal(0);
      expect(returnValue).to.equal(cardStackInitialState);
    });

    it('calls RN\'s StateUtils.reset when reset action arrives', () => {
      const routes = [{ key: 'new route'}];
      const action = reset(routes, cardStackInitialState.key);
      const returnValue = reducer(cardStackInitialState, action);

      expect(resetSpy).to.have.been.calledOnce;
      expect(resetSpy).to.have.been.calledWith(
        cardStackInitialState, routes);
    });

    it('calls RN\'s StateUtils.reset with index when reset action has index data', () => {
      const routes = [{ key: 'new route'}];
      const action = reset(routes, cardStackInitialState.key, 0);
      reducer(cardStackInitialState, action);

      expect(resetSpy).to.have.been.calledOnce;
      expect(resetSpy).to.have.been.calledWith(
        cardStackInitialState, routes, 0);
    });

    it('calls RN\'s StateUtils.replaceAt when replaceAt action arrives', () => {
      const routeKey = 'old-key';
      const route = { key: 'new-route' };
      const action = replaceAt(routeKey, route, cardStackInitialState.key);
      reducer(cardStackInitialState, action);

      expect(replaceAtSpy).to.have.been.calledOnce;
      expect(replaceAtSpy).to.have.been.calledWith(
        cardStackInitialState, routeKey, route
      );
    });

    it('calls RN\'s StateUtils.replaceAtIndex when replaceAtIndex action arrives', () => {
      const index = 1;
      const route = { key: 'new-route' };
      const action = replaceAtIndex(index, route, cardStackInitialState.key);
      reducer(cardStackInitialState, action);

      expect(replaceAtIndexSpy).to.have.been.calledOnce;
      expect(replaceAtIndexSpy).to.have.been.calledWith(
        cardStackInitialState, index, route
      );
    });

    it('calls RN\'s StateUtils.jumpToIndex when jumpToIndex action arrives', () => {
      const action = jumpToIndex(0, cardStackInitialState.key);
      reducer(cardStackInitialState, action);

      expect(jumpToIndexSpy).to.have.been.calledOnce;
      expect(jumpToIndexSpy).to.have.been.calledWith(cardStackInitialState, action.payload.routeIndex);
    });

    it('calls RN\'s StateUtils.jumpTo when jumpTo action arrives', () => {
      const routeKey = 'key';
      const action = jumpTo(routeKey, cardStackInitialState.key);
      reducer(cardStackInitialState, action);

      expect(jumpToSpy).to.have.been.calledOnce;
      expect(jumpToSpy).to.have.been.calledWith(cardStackInitialState, action.payload.routeKey);
    });

    it('calls RN\'s StateUtils.back when back action arrives', () => {
      const action = back(cardStackInitialState.key);
      reducer(cardStackInitialState, action);

      expect(backSpy).to.have.been.calledOnce;
      expect(backSpy).to.have.been.calledWith(cardStackInitialState);
    });

    it('calls RN\'s StateUtils.forward when forward action arrives', () => {
      const action = forward(cardStackInitialState.key);
      reducer(cardStackInitialState, action);

      expect(forwardSpy).to.have.been.calledOnce;
      expect(forwardSpy).to.have.been.calledWith(cardStackInitialState);
    });
  });

  describe('tabReducer', () => {
    let reducer;

    beforeEach(() => {
      reducer = tabReducer(tabInitialState);
      tabReducerAPI.__Rewire__('StateUtils', StateUtils);
      jumpToIndexSpy = spy(StateUtils, 'jumpToIndex');
      jumpToSpy = spy(StateUtils, 'jumpTo');
    });

    afterEach(() => {
      StateUtils.jumpToIndex.restore();
      StateUtils.jumpTo.restore();
      tabReducerAPI.__ResetDependency__('StateUtils');
    });
    
    it('throws if initial state does not look good', () => {
      const tabReducerFnNoInitialState = () => tabReducer();
      const tabReducerFnJustKey = () => tabReducer({ key: 'key' });
      const tabReducerFnNoRoutes = () => tabReducer({ key: 'key', index: 0 });

      expect(tabReducerFnNoInitialState).to.throw(Error);
      expect(tabReducerFnJustKey).to.throw(Error);
      expect(tabReducerFnNoRoutes).to.throw(Error);
    });

    it('returns a function', () => {
      expect(typeof reducer === 'function').to.be.true;
    });

    it('returns navigation state for random events', () => {
      expect(reducer(tabInitialState, null)).to.equal(tabInitialState);
      expect(reducer(tabInitialState, { type: 'RANDOM_EVENT' })).to.equal(tabInitialState);
    });

    it('calls RN\'s StateUtils.jumpToIndex when jumpToIndex action arrives and returns whatever StateUtils.jumpToIndex returns', () => {
      const action = jumpToIndex(0, tabInitialState.key);
      const returnValue = reducer(tabInitialState, action);

      expect(jumpToIndexSpy).to.have.been.calledOnce;
      expect(jumpToIndexSpy).to.have.been.calledWith(tabInitialState, action.payload.routeIndex);
      expect(returnValue).to.equal('StateUtils.jumpToIndex');
    });

    it('does not call RN\'s StateUtils.jumpToIndex when jumpToIndex action has key different from state.key and returns current nav state', () => {
      const action = jumpToIndex(0, 'a different key');
      const returnValue = reducer(tabInitialState, action);

      expect(jumpToIndexSpy.callCount).to.equal(0);
      expect(returnValue).to.equal(tabInitialState);
    });

    it('calls RN\'s StateUtils.jumpTo when jumpTo action arrives', () => {
      const routeKey = 'key';
      const action = jumpTo(routeKey, tabInitialState.key);
      reducer(tabInitialState, action);

      expect(jumpToSpy).to.have.been.calledOnce;
      expect(jumpToSpy).to.have.been.calledWith(tabInitialState, action.payload.routeKey);
    });
  });
});
