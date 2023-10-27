import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <React.Fragment>
      <div className='root-notifications'>
        <Notifications />
      </div>
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
