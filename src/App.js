import React, { useState, useReducer } from 'react';
import './App.css';
import './pageTransitions/slideTransition.css';
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
  const { location } = props;
  const [prevDepth, setPrevDepth] = useState(getPathDepth(props.location));
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 800, exit: 300 };

  function getPathDepth() {
    let pathArr = props.location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }

  //ComponentWilLReceiveProps eqivilant
  useReducer(() => {
      setPrevDepth(getPathDepth());
  }, []);

  return (
    <div>
      <NavBar />
      <Aside page={globalState.page.page}/>
      <TransitionGroup component="div" id="container">
        <CSSTransition key={currentKey} timeout={timeout} classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
          <div className={getPathDepth() - prevDepth >= 0 ? "left" : "right"}>
            <Switch>
              <Route exact path ="/" component={Homepage} />
              <Route exact path ="/about" component={About} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(App);
