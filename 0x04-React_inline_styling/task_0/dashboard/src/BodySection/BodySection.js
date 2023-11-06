import React from 'react';
import PropTypes from 'prop-types';

class BodySection extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    title: 'title',
  }

  render() {
    return (
        <div className='BodySection'>
          <h2>{ this.props.title }</h2>
          { this.props.children }
        </div>
    );
  }
}

export default BodySection;
