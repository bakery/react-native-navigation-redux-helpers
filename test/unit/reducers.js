import { __RewireAPI__ as cardStackReducerAPI, cardStackReducer } from '../../src/reducers/card-stack';
import { __RewireAPI__ as tabReducerAPI, tabReducer } from '../../src/reducers/tab-reducer';
import {
  pushRoute,
  popRoute, 
  jumpTo,
} from '../../src/actions';

const cardStackInitialState = {
  key: 'key',
  index: 0,
  routes: [{
    key: 'route-1',
    title: 'Route 1'
  }]
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
  let pushSpy, popSpy, jumpToIndexSpy;
  const StateUtils = {
    push(state, action) {
      return 'StateUtils.push';
    },

    pop(state) {
      return 'StateUtils.pop';
    },

    jumpToIndex(state) {
      return 'StateUtils.jumpToIndex';
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
    beforeEach(() => {
      cardStackReducerAPI.__Rewire__('StateUtils', StateUtils);
      pushSpy = spy(StateUtils, 'push');
      popSpy = spy(StateUtils, 'pop');
    });

    afterEach(() => {
      StateUtils.push.restore();
      StateUtils.pop.restore();
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
      const reducer = cardStackReducer(cardStackInitialState);
      expect(typeof reducer === 'function').to.be.true;
    });

    it('returns navigation state for random events', () => {
      const reducer = cardStackReducer(cardStackInitialState);
      expect(reducer(cardStackInitialState, null)).to.equal(cardStackInitialState);
      expect(reducer(cardStackInitialState, { type: 'RANDOM_EVENT' })).to.equal(cardStackInitialState);
    });

    it('calls RN\'s StateUtils.push when pushRoute action arrives and returns whatever StateUtils.push returns', () => {
      const reducer = cardStackReducer(cardStackInitialState);
      const action = pushRoute({ key: 'route' }, cardStackInitialState.key);

      const returnValue = reducer(cardStackInitialState, action);

      console.log(pushSpy.callCount);
      console.log(pushSpy.args);

      expect(pushSpy).to.have.been.calledOnce;
      expect(pushSpy).to.have.been.calledWith(cardStackInitialState, action.payload.route);
      expect(returnValue).to.equal('StateUtils.push');
    });

    it('does not call RN\'s StateUtils.push when pushRoute action has payload.key different from state.key and returns current nav state', () => {
      const reducer = cardStackReducer(cardStackInitialState);
      const action = pushRoute({ key: 'route' }, 'nav');

      const returnValue = reducer(cardStackInitialState, action);
      expect(pushSpy.callCount).to.equal(0);
      expect(returnValue).to.equal(cardStackInitialState);
    });

    it('calls RN\'s StateUtils.pop when popRoute action arrives and returns whatever StateUtils.pop returns', () => {
      const reducer = cardStackReducer(cardStackInitialState);
      const action = popRoute(cardStackInitialState.key);
      const returnValue = reducer(cardStackInitialState, action);

      expect(popSpy).to.have.been.calledOnce;
      expect(popSpy).to.have.been.calledWith(cardStackInitialState);
      expect(returnValue).to.equal('StateUtils.pop');
    });

    it('does not call RN\'s StateUtils.pop when popRoute action has payload.key different from state.key and returns current nav state', () => {
      const reducer = cardStackReducer(cardStackInitialState);
      const action = popRoute('random-nav-key');
      const returnValue = reducer(cardStackInitialState, action);

      expect(popSpy.callCount).to.equal(0);
      expect(returnValue).to.equal(cardStackInitialState);
    });
  });

  describe('tabReducer', () => {
    beforeEach(() => {
      tabReducerAPI.__Rewire__('StateUtils', StateUtils);
      jumpToIndexSpy = spy(StateUtils, 'jumpToIndex');
    });

    afterEach(() => {
      StateUtils.jumpToIndex.restore();
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
      const reducer = tabReducer(tabInitialState);
      expect(typeof reducer === 'function').to.be.true;
    });

    it('returns navigation state for random events', () => {
      const reducer = tabReducer(tabInitialState);
      expect(reducer(tabInitialState, null)).to.equal(tabInitialState);
      expect(reducer(tabInitialState, { type: 'RANDOM_EVENT' })).to.equal(tabInitialState);
    });

    it('calls RN\'s StateUtils.jumpToIndex when jumpTo action arrives and returns whatever StateUtils.jumpToIndex returns', () => {
      const reducer = tabReducer(tabInitialState);
      const action = jumpTo(0, tabInitialState.key);
      const returnValue = reducer(tabInitialState, action);

      expect(jumpToIndexSpy).to.have.been.calledOnce;
      expect(jumpToIndexSpy).to.have.been.calledWith(tabInitialState, action.payload.routeIndex);
      expect(returnValue).to.equal('StateUtils.jumpToIndex');
    });

    it('does not call RN\'s StateUtils.jumpToIndex when jumpTo action has key different from state.key and returns current nav state', () => {
      const reducer = tabReducer(tabInitialState);
      const action = jumpTo(0, 'a different key');
      const returnValue = reducer(tabInitialState, action);

      expect(jumpToIndexSpy.callCount).to.equal(0);
      expect(returnValue).to.equal(tabInitialState);
    });
  });
});
