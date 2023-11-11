import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import {StyleSheetTestUtils} from 'aphrodite';

describe('CourseListRow', function () {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', function () {
    const dummyProps = {
      isHeader: true,
      textFirstCell: 'test',
    }
    const wrapper = shallow(<CourseListRow {...dummyProps} />);
    expect(wrapper.html()).toContain("test");
  });

  it('renders two cells when textSecondCell is present and isHeader is true', function () {
    const dummyProps = {
      isHeader: true,
      textFirstCell: 'test1',
      textSecondCell: 'test2',
    }
    const wrapper = shallow(<CourseListRow {...dummyProps} />);
    const headers = wrapper.find('th');
    expect(headers).toHaveLength(2);
  });

  it('renders two td elements within a tr element when isHeader is false', function () {
    const dummyProps = {
      isHeader: false,
      textFirstCell: 'test1',
      textSecondCell: 'test2',
    }
    const wrapper = shallow(<CourseListRow {...dummyProps} />);
    const regularRow = wrapper.find('td');
    expect(regularRow).toHaveLength(2);
  });
});
