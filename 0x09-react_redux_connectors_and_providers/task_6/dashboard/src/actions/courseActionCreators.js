import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

// Action creators
export function selectCourse(index) {
  return { type: SELECT_COURSE, index: index };
}

export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index: index };
}

export function fetchCourseSuccess(data) {
  return { type: FETCH_COURSE_SUCCESS, data };
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

export const boundFetchCourseSuccess = function(data) {
  return function(dispatch) {
    dispatch(fetchCourseSuccess(data));
  };
}
