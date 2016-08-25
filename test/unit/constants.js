import {
  JUMP_TO,
  PUSH_ROUTE,
  POP_ROUTE,
  RESET_ROUTE,
  REPLACE_AT,
  REPLACE_AT_INDEX,
  JUMP_TO_INDEX,
  BACK,
  FORWARD
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

    it('REPLACE_AT_INDEX is defined', () => {
      expect(REPLACE_AT_INDEX).to.be.ok;
    });

    it('JUMP_TO_INDEX is defined', () => {
      expect(JUMP_TO_INDEX).to.be.ok;
    });

    it('BACK is defined', () => {
      expect(BACK).to.be.ok;
    });

    it('FORWARD is defined', () => {
      expect(FORWARD).to.be.ok;
    });
  });
});
