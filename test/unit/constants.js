import {
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE,
} from '../../src/constants';

describe('constants', () => {
  describe('definitions', () => {
    it('JUMP_TO is defined', () => {
      expect(JUMP_TO).to.be.ok;
    });

    it('PUSH_ROUTE is defined', () => {
      expect(PUSH_ROUTE).to.be.ok;
    });

    it('POP_ROUTE is defined', () => {
      expect(POP_ROUTE).to.be.ok;
    });
  });
});
