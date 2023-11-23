import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export function selectCourse(index) {
  return { type: SELECT_COURSE, index: index };
}

export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index: index };
}

export const boundSelectCourse = function(index) {
  return dispatch(selectCourse(index));
}

export const boundUnSelectCourse = function(index) {
  return dispatch(unSelectCourse(index));
}
