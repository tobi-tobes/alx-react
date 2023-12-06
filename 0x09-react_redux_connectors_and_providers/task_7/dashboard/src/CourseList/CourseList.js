import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { connect } from 'react-redux';
import getListCourses from '../selectors/courseSelector';

class CourseList extends React.Component {
  static propTypes = {
    listCourses: PropTypes.array,
    fetchCourses: PropTypes.func,
    selectCourse: PropTypes.func,
    unSelectCourse: PropTypes.func
  }
  
  static defaultProps = {
    listCourses: [],
    fetchCourses: () => {},
    selectCourse: () => {},
    unSelectCourse: () => {}
  }

  static styles = StyleSheet.create({
    CourseList: {
      border: '1px solid grey',
      margin: 'auto',
      width: '90%',
      height: '8rem'
    }
  });

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    if (this.props.listCourses.length === 0) {
      return (
        <table>
          <thead>
            <CourseListRow textFirstCell="No course available yet" isHeader={true}/>
          </thead>
        </table>
      );
    }
  
    return (
      <table className={css(CourseList.styles.CourseList)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true}/>
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
        </thead>
        <tbody>
          {this.props.listCourses.map((course) => (
            <CourseListRow 
              key={course.id}
              id={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
              onChangeRow={this.onChangeRow}
              isChecked={course.isSelected}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    listCourses: getListCourses(state).toJS()
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchCourses: () => { dispatch(fetchCourses()); },
    selectCourse: (index) => { dispatch(selectCourse(index)); },
    unSelectCourse: (index) => { dispatch(unSelectCourse(index)); }
  }
}

const connectedCourseList = connect(mapStateToProps, mapDispatchToProps)(CourseList);

export { CourseList, connectedCourseList };
