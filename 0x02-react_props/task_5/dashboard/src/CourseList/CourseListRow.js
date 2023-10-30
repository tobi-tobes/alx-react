import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  const isHeader = props.isHeader;
  const textFirstCell = props.textFirstCell;
  const textSecondCell = props.textSecondCell;

  let elementToRender;

  if (isHeader) {
    if (textSecondCell === null) {
      elementToRender = <tr><th colSpan={2}>{ textFirstCell }</th></tr>
    } else {
      elementToRender = <tr><th>{ textFirstCell }</th><th>{ textSecondCell }</th></tr>
    }
  } else {
    elementToRender = <tr><td>{ textFirstCell }</td><td>{ textSecondCell }</td></tr>
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
