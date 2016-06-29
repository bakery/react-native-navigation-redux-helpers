import { cardStackReducer } from '../../src/reducers/card-stack';

const cardStackInitialState = {
  key: 'key',
  index: 0,
  routes: [{
    key: 'route-1',
    title: 'Route 1'
  }]
}

describe('reducers', () => {
  describe('definitions', () => {
    it('cardStackReducer is defined and it is a function', () => {
      expect(cardStackReducer).to.be.ok;
      expect(typeof cardStackReducer === 'function').to.be.true;
    });
  });

  describe('cardStackReducer', () => {
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
  });
});
