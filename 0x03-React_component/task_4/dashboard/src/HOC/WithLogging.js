import React from 'react';
import PropTypes from 'prop-types';

const withLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name || WrappedComponent.displayName || 'Component'} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name || WrappedComponent.displayName || 'Component'} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  WithLogging.displayName = `WithLogging(${WrappedComponent.name || WrappedComponent.displayName || 'Component'})`;
  return WithLogging;
}

export default withLogging;
