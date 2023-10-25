import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const currentYear = getFullYear();
  const footerCopy = getFooterCopy(true);

  return (
    <div className="App">
      <div className="App-header">
        <div className='App-logo'></div>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright { currentYear } - { footerCopy }</p>
      </div>
    </div>
  );
}

export default App;
