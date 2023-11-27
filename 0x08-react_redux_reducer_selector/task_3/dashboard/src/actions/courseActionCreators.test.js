import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

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
