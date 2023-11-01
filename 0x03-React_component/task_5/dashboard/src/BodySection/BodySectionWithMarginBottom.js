import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    title: 'title',
  }

  render() {
    return (
        <div className='BodySectionWithMarginBottom'>
          <BodySection {...this.props}/>
        </div>
    );
  }
}

export default BodySectionWithMarginBottom;
