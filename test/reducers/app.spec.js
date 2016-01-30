import expect from 'expect'
import app from '../../reducers/app'
import * as types from '../../constants/actionTypes'

describe('app reducer', () => {
  it('should handle initial state', () => {
    expect(
      app(undefined, {})
    ).toEqual(0);
  });

  it('should handle INCREMENT', () => {
    expect(
      app(1, { type: types.INCREMENT })
    ).toEqual(2);
  });

  it('should handle DECREMENT', () => {
    expect(
      app(2, { type: types.DECREMENT })
    ).toEqual(1);
  });

  it('should handle unknown action', () => {
    expect(
      app(2, { type: 'uknown' })
    ).toEqual(2);
  });
});
