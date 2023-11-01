import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', function () {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', function () {
    const dummyProps = {
      isHeader: true,
      textFirstCell: 'test',
    }
    const wrapper = shallow(<CourseListRow {...dummyProps} />);
    expect(wrapper.html()).toBe('<tr><th colSpan="2">test</th></tr>');
  });

  it('renders two cells when textSecondCell is present and isHeader is true', function () {
    const dummyProps = {
      isHeader: true,
      textFirstCell: 'test1',
      textSecondCell: 'test2',
    }
    const wrapper = shallow(<CourseListRow {...dummyProps} />);
    expect(wrapper.html()).toBe('<tr><th>test1</th><th>test2</th></tr>');
  });

  it('renders two td elements within a tr element when isHeader is false', function () {
    const dummyProps = {
      isHeader: false,
      textFirstCell: 'test1',
      textSecondCell: 'test2',
    }
    const wrapper = shallow(<CourseListRow {...dummyProps} />);
    expect(wrapper.html()).toBe('<tr><td>test1</td><td>test2</td></tr>');
  });
});
