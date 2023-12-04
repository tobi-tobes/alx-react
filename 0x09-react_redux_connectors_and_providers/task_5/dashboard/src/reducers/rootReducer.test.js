import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer', function() {
  it('has an initial state that has the right structure', function() {
    const initialState = rootReducer(undefined, {});

    expect('courses' in initialState).toBe(true);
    expect('notifications' in initialState).toBe(true);
    expect('ui' in initialState).toBe(true);

    expect(Map.isMap(initialState.courses)).toBe(true);
    expect(Map.isMap(initialState.notifications)).toBe(true);
    expect(Map.isMap(initialState.ui)).toBe(true);
  });
});
