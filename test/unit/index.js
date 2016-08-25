import {
  constants, actions, cardStackReducer, tabReducer
} from '../../src/index';

const { 
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE,
  RESET_ROUTE,
  REPLACE_AT,
  REPLACE_AT_INDEX,
  JUMP_TO_INDEX,
  BACK,
  FORWARD
} = constants;

const {
  pushRoute,
  popRoute, 
  jumpTo,
  reset,
  replaceAt,
  replaceAtIndex,
  jumpToIndex,
  back,
  forward
} = actions;

describe('react-native-navigation-redux-helpers', () => {
  describe('definitions', () => {
    it('exports constants', () => {
      expect(constants).to.be.ok;
      
      [
        JUMP_TO,
        PUSH_ROUTE,
        POP_ROUTE,
        RESET_ROUTE,
        REPLACE_AT,
        REPLACE_AT_INDEX,
        JUMP_TO_INDEX,
        BACK,
        FORWARD
      ].forEach(c => expect(c).to.be.ok);
    });

    it('exports actions', () => {
      expect(actions).to.be.ok;
      
      [
        pushRoute,
        popRoute, 
        jumpTo,
        reset,
        replaceAt,
        replaceAtIndex,
        jumpToIndex,
        back,
        forward
      ].forEach(a => expect(a).to.be.ok);
    });

    it('exports cardStackReducer', () => {
      expect(cardStackReducer).to.be.ok;
    });

    it('exports tabReducer', () => {
      expect(tabReducer).to.be.ok;
    });
  });
});
