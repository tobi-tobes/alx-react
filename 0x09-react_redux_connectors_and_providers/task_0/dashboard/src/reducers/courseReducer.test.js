import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map, fromJS } from 'immutable';

describe('courseReducer', function () {
  it('returns an empty array for the default state', function () {
    const initialState = Map();

    const newState = courseReducer(initialState, {});

    expect(newState).toEqual(initialState);
  });

  it('returns the right data for the FETCH_COURSE_SUCCESS action', function () {
    const initialState = Map();

    const fetchCourseSuccess = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
        id: 1,
        name: "ES6",
        credit: 60
        },
        {
        id: 2,
        name: "Webpack",
        credit: 20
        },
        {
        id: 3,
        name: "React",
        credit: 40
        }
      ]
    };

    const newState = courseReducer(initialState, fetchCourseSuccess);

    newState.toJS().result.forEach((courseId) => {
      const course = newState.toJS().entities.courses[courseId];
      expect(course).toHaveProperty('isSelected');
      expect(course.isSelected).toBe(false);
    });
  });

  it('returns the data with the right item updated for the SELECT_COURSE action', function () {
    const initialState = fromJS([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]);

    const selectCourse = {
      type: SELECT_COURSE,
      index: 2
    };

    const newState = courseReducer(initialState, selectCourse).toJS();

    const selectedCourse = newState.find((course) => course.id === selectCourse.index);

    expect(selectedCourse.isSelected).toEqual(true);
  });

  it('returns the data with the right item updated for the UNSELECT_COURSE action', function () {
    const initialState = fromJS([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]);

    const unSelectCourse = {
      type: UNSELECT_COURSE,
      index: 2
    };

    const newState = courseReducer(initialState, unSelectCourse);

    const selectedCourse = newState.toJS().find((course) => course.id === unSelectCourse.index);

    expect(selectedCourse.isSelected).toEqual(false);
  });
});
