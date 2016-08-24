import {
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE,
  RESET_ROUTE,
  REPLACE_AT
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

    it('RESET_ROUTE is defined', () => {
      expect(RESET_ROUTE).to.be.ok;
    });

    it('REPLACE_AT is defined', () => {
      expect(REPLACE_AT).to.be.ok;
    });
  });
});
