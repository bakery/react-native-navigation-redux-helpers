import {
  JUMP_TO_TAB,
  PUSH_ROUTE,
  BACK,
} from '../../src/constants';

describe('constants', () => {
  describe('definitions', () => {
    it('JUMP_TO_TAB is defined', () => {
      expect(JUMP_TO_TAB).to.be.ok;
    });

    it('PUSH_ROUTE is defined', () => {
      expect(PUSH_ROUTE).to.be.ok;
    });

    it('BACK is defined', () => {
      expect(BACK).to.be.ok;
    });
  });
});
