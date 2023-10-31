import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';

function CourseList(props) {
  const listCourses = props.listCourses;

  if (listCourses.length === 0) {
    return (
      <table>
        <thead>
          <CourseListRow textFirstCell="No course available yet" isHeader={true}/>
        </thead>
      </table>
    );
  }

  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true}/>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
      </thead>
      <tbody>
        {listCourses.map((course) => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false}/>
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;
