import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  const isHeader = props.isHeader;
  const textFirstCell = props.textFirstCell;
  const textSecondCell = props.textSecondCell;

  const headerStyle = {backgroundColor: '#deb5b545', paddingTop: '2px', paddingBottom: '2px'};
  const rowStyle = {backgroundColor: '#f5f5f5ab', paddingTop: '2px', paddingBottom: '2px'};

  const styles = StyleSheet.create({
    th: {
      borderBottom: '2px solid grey'
    },
    thTrFirstChild: {
      textAlign: 'center'
    },
    thTrNthChild: {
      textAlign: 'left'
    }
  });

  let elementToRender;

  if (isHeader) {
    if (textSecondCell === null) {
      elementToRender = <tr style={headerStyle}><th colSpan={2} className={css(styles.th, styles.thTrFirstChild)}>{ textFirstCell }</th></tr>
    } else {
      elementToRender = <tr style={headerStyle}><th className={css(styles.th, styles.thTrNthChild)}>{ textFirstCell }</th><th className={css(styles.th, styles.thTrNthChild)}>{ textSecondCell }</th></tr>
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
