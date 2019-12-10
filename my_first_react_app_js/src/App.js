import React from 'react';
import logo from './logo.svg';
import './App.css';

//IMPORT COMPONENTS 
import HellWorldArrowFunc from './HelloWorldArrowFunc';
import HelloWorldFunction from './HelloWorldFunction';
import Album from './Album';
import Welcome from './Welcome';
import TodoComponent from './HelloWorld';
import UserApp from './UserApp';
import MyTable from './MyTable';
import NameForm from './NameForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {console.log("ENV VAR " + process.env.NODE_ENV)
        }

        <HellWorldArrowFunc></HellWorldArrowFunc>
        <HelloWorldFunction></HelloWorldFunction>
        <Album></Album>
        <Welcome name="OLE BRO"></Welcome>
        {/* <TodoComponent></TodoComponent> */}
        <UserApp></UserApp>
        <MyTable></MyTable>
        <NameForm></NameForm>
      </header>
    </div>
  );
}

export default App;
