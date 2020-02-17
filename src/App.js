import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route, withRouter } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Aside from './components/Aside/Aside';
import useGlobalState from './useGlobalState';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App(props) {
  const globalState = useGlobalState();

  function getPathDepth(location) {
    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    console.log(pathArr, pathArr.length);
    return pathArr.length;
  }
  
  const [prevDepth, setPrevDepth] = useState(getPathDepth(props.location));
  console.log(prevDepth);

  const timeout = { enter: 800, exit: 400 };
  return (
    <div>
      <NavBar />
      <Aside page={globalState.page.page}/>
      <TransitionGroup component="div" id="container">
        <CSSTransition timeout={timeout} classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
          <Switch>
            <Route exact path ="/" component={Homepage} />
            <Route exact path ="/about" component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
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

export default withRouter(App);
