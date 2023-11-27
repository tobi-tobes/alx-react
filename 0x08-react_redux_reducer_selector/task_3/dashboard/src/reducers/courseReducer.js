import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// basic state
const initialState = [];

// reducer function
export default function courseReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({...course, isSelected: false}));
    case SELECT_COURSE:
      const { index } = action;
      if (index >= 0 && index < state.length) {
        return state.map((course) => ({...course, isSelected: course.id === index ? true : false}));
      }
      return state;
    case UNSELECT_COURSE:
      const { index: unselectIndex } = action;
      if (unselectIndex >= 0 && unselectIndex < state.length) {
        return state.map((course) => ({...course, isSelected: course.id === unselectIndex ? false : course.isSelected}));
      }
      return state;
    default:
      return state;
  }
}
