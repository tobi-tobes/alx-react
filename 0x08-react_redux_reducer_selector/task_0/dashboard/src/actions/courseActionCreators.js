import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Action creators
export function selectCourse(index) {
  return { type: SELECT_COURSE, index: index };
}

export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index: index };
}

// Bound action creators
export const boundSelectCourse = function(index) {
  return function(dispatch) {
    dispatch(selectCourse(index));
  };
}

export const boundUnSelectCourse = function(index) {
  return function(dispatch) {
    dispatch(unSelectCourse(index));
  };
}
