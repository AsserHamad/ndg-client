import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path ="/" component={Homepage} />
        <Route exact path ="/about" component={About} />
      </Switch>
    </div>
  );
  
  //   <header className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <p>
  //     Edit <code>src/App.js</code> and save to reload.
  //   </p>
  //   <a
  //     className="App-link"
  //     href="https://reactjs.org"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     Learn React
  //   </a>
  // </header>
}

export default App;
