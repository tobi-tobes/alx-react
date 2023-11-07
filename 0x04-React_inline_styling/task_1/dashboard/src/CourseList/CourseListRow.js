import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css'

function CourseListRow(props) {
  const isHeader = props.isHeader;
  const textFirstCell = props.textFirstCell;
  const textSecondCell = props.textSecondCell;

  const headerStyle = {backgroundColor: '#deb5b545'};
  const rowStyle = {backgroundColor: '#f5f5f5ab'};

  let elementToRender;

  if (isHeader) {
    if (textSecondCell === null) {
      elementToRender = <tr style={headerStyle}><th colSpan={2}>{ textFirstCell }</th></tr>
    } else {
      elementToRender = <tr style={headerStyle}><th>{ textFirstCell }</th><th>{ textSecondCell }</th></tr>
    }
  } else {
    elementToRender = <tr style={rowStyle}><td>{ textFirstCell }</td><td>{ textSecondCell }</td></tr>
  }

  return elementToRender;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
