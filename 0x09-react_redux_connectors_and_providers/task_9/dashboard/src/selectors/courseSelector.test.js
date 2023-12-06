import courseSelector from './courseSelector';
import { Map, List } from 'immutable';

describe('courseSelector', function() {
  it('gets all the course entities from within the reducer and returns a List using valueSeq from Immutable', function() {
    const coursesState = Map({
      courses: [{id: 1, name: 'ES6', credit: 60}, {id: 2, name: 'Webpack', credit: 20}, {id: 3, name: 'React', credit: 40}]
    });
  
    const state = {
      notifications: Map(),
      ui: Map(),
      courses: coursesState
    };

    const selectedCourses = courseSelector(state);
    expect(List.isList(selectedCourses)).toBe(true);

    const expectedCourses = [{ id: 1, name: 'ES6', credit: 60 }, { id: 2, name: 'Webpack', credit: 20 }, { id: 3, name: 'React', credit: 40 }];
    expect(selectedCourses.toJS()[0]).toStrictEqual(expectedCourses);
  })
});
