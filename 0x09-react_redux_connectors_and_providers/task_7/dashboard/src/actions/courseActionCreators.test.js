import { selectCourse, unSelectCourse, fetchCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('selectCourse', function () {
  it('returns an action based on the given index', function () {
    const expected = { type: SELECT_COURSE, index: 1 };

    const returned = selectCourse(1);

    expect(returned).toEqual(expected);
  });
});

describe('selectCourse', function () {
  it('returns an action based on the given index', function () {
    const expected = { type: UNSELECT_COURSE, index: 1 };

    const returned = unSelectCourse(1);

    expect(returned).toEqual(expected);
  });
});

describe('fetchCourses', function() {
  afterEach(() => {
    fetchMock.restore();
  });

  it('queries the API in courses.json and dispatches the action setCourses upon success', async function () {
    const response = [{id: 1, name: 'ES6', credit: 60}];

    const expectedActions = [
      { type: FETCH_COURSE_SUCCESS, data: response }
    ];

    const store = mockStore({});

    fetchMock.mock('http://localhost:3000/courses.json', response);

    await store.dispatch(fetchCourses());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
