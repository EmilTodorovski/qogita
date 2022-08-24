export const makeReducer =
  <T>() =>
  (state: T, newState: Partial<T>) => ({
    ...state,
    ...newState,
  });
