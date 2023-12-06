import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { courses, coursesNormalizer } from '../schema/courses';
import { Map, setIn, List } from 'immutable';

// basic state
const initialState = Map();

// reducer function
export default function courseReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      const coursesWithSelection = action.data.map(course => ({ ...course, isSelected: false }));
      const normalized = coursesNormalizer(coursesWithSelection);
      return state.mergeDeep(Map(normalized.entities.courses));
    case SELECT_COURSE:
      return setIn(state, [action.index, 'isSelected'], true);;
    case UNSELECT_COURSE:
      return setIn(state, [action.index, 'isSelected'], false);
    default:
      return state;
  }
}
