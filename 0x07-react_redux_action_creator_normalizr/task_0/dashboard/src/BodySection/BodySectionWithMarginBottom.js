import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    title: 'title',
  }

  static styles= StyleSheet.create({
    BodySectionWithMarginBottom: {
      marginBottom: '40px',
    }
  });

  render() {
    return (
        <div className={css(BodySectionWithMarginBottom.styles.BodySectionWithMarginBottom)}>
          <BodySection {...this.props}/>
        </div>
    );
  }
}

export default BodySectionWithMarginBottom;
