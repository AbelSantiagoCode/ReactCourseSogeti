import React from 'react';
import logo from './logo.svg';
import './App.css';
import SmartComponent from './SmartComponent';
import UserApp from './UserApp';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SmartComponent name="nombre bro" address="address bro"></SmartComponent>
        <UserApp></UserApp>
        {console.log("ENV VAR"+process.env.NODE_ENV)}
      </header>
    </div>
  );
}

export default App;
