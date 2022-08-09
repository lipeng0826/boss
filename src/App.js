import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <div style={{height: '60px', background: '#ccc', lineHeight: '60px'}}>header</div>
      <div id="react"></div>
      <div id="vue"></div>
    </div>
  );
}

export default App;
