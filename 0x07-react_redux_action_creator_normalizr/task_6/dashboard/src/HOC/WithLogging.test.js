import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';
import withLogging from './WithLogging';

describe('WithLogging', function () {
  it('calls console.log on mount and on unmount with Component when the wrapped element is pure HTML', function () {
    const consoleLogMock = jest.spyOn(console, 'log');
    const WrappedComponent = withLogging(() => <div>Test</div>);
    
    const wrapper = shallow(<WrappedComponent />);
    expect(consoleLogMock).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(consoleLogMock).toHaveBeenCalledWith('Component Component is going to unmount');

    consoleLogMock.mockRestore();
  });

  it('calls console.log on mount and on unmount with Component when the wrapped element is the Login component', function () {
    const consoleLogMock = jest.spyOn(console, 'log');
    const WrappedComponent = withLogging(Login);
    
    const wrapper = shallow(<WrappedComponent />);
    expect(consoleLogMock).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(consoleLogMock).toHaveBeenCalledWith('Component Login is going to unmount');

    consoleLogMock.mockRestore();
  });
});
