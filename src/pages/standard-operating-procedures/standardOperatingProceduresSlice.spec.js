import sopsReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './standardOperatingProceduresSlice';

describe('sops reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(sopsReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = sopsReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = sopsReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = sopsReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
