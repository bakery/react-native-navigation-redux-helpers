import {
  constants, actions, cardStackReducer, tabReducer
} from '../../src/index';

const { 
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE,
} = constants;

const {
  pushRoute,
  popRoute, 
  jumpTo,
} = actions;

describe('react-native-navigation-redux-helpers', () => {
  describe('definitions', () => {
    it('exports constants', () => {
      expect(constants).to.be.ok;
      expect(JUMP_TO).to.be.ok;
      expect(PUSH_ROUTE).to.be.ok;
      expect(POP_ROUTE).to.be.ok;
    });

    it('exports actions', () => {
      expect(actions).to.be.ok;
      expect(pushRoute).to.be.ok;
      expect(popRoute).to.be.ok;
      expect(jumpTo).to.be.ok;
    });

    it('exports cardStackReducer', () => {
      expect(cardStackReducer).to.be.ok;
    });

    it('exports tabReducer', () => {
      expect(tabReducer).to.be.ok;
    });
  });
});
